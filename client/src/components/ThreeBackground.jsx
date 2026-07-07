import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const NODE_COUNT = 180
const CONNECTION_DIST = 2.2
const GLOBE_RADIUS = 3.8
const AUTO_ROTATE_SPEED = 0.0006

export default function ThreeBackground({ className = '' }) {
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const sceneRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.z = 8

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Particles arranged in a sphere
    const positions = []
    const sizes = []
    const colors = []
    const baseColor = new THREE.Color('#7fcdff')
    const accentColor = new THREE.Color('#dff7ff')

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = GLOBE_RADIUS * (0.85 + Math.random() * 0.15)

      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      )

      const size = 0.04 + Math.random() * 0.08
      sizes.push(size)

      const lerp = Math.random()
      const c = baseColor.clone().lerp(accentColor, lerp)
      colors.push(c.r, c.g, c.b)
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

    const mat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geo, mat)
    scene.add(points)

    // Connection lines
    const linePositions = []
    const posArr = geo.attributes.position.array

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = posArr[i * 3] - posArr[j * 3]
        const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1]
        const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < CONNECTION_DIST) {
          linePositions.push(
            posArr[i * 3], posArr[i * 3 + 1], posArr[i * 3 + 2],
            posArr[j * 3], posArr[j * 3 + 1], posArr[j * 3 + 2]
          )
        }
      }
    }

    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3))

    const lineMat = new THREE.LineBasicMaterial({
      color: '#7fcdff',
      transparent: true,
      opacity: 0.08,
    })

    const lines = new THREE.LineSegments(lineGeo, lineMat)
    scene.add(lines)

    // Outer glow ring
    const ringGeo = new THREE.RingGeometry(4.6, 5.4, 64)
    const ringMat = new THREE.MeshBasicMaterial({
      color: '#7fcdff',
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3
    scene.add(ring)

    const ring2 = new THREE.Mesh(
      new THREE.RingGeometry(5.6, 6.2, 64),
      new THREE.MeshBasicMaterial({
        color: '#dff7ff',
        transparent: true,
        opacity: 0.025,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    )
    ring2.rotation.x = -Math.PI / 4
    ring2.rotation.z = Math.PI / 6
    scene.add(ring2)

    // Mouse handler
    const handleMouse = (e) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      }
    }

    document.addEventListener('mousemove', handleMouse)

    // Resize handler
    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(container)

    // Theme observer
    const themeCheck = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'
      const target = isLight ? 0 : 1
      points.material.opacity = target
      lines.material.opacity = target * 0.08
      ring.material.opacity = target * 0.04
      ring2.material.opacity = target * 0.025
    }
    themeCheck()

    const themeObserver = new MutationObserver(themeCheck)
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    // Animation loop
    let frame
    const animate = () => {
      frame = requestAnimationFrame(animate)

      const mx = mouseRef.current.x * 0.5
      const my = mouseRef.current.y * 0.3

      points.rotation.y += AUTO_ROTATE_SPEED
      lines.rotation.y += AUTO_ROTATE_SPEED
      ring.rotation.y += AUTO_ROTATE_SPEED * 0.5
      ring2.rotation.y -= AUTO_ROTATE_SPEED * 0.3

      // Smooth mouse follow
      points.rotation.x += (my * 0.15 - points.rotation.x) * 0.03
      points.rotation.y += (mx * 0.2 - (points.rotation.y - AUTO_ROTATE_SPEED)) * 0.03
      lines.rotation.copy(points.rotation)
      ring.rotation.z += (mx * 0.05 - ring.rotation.z) * 0.02

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('mousemove', handleMouse)
      observer.disconnect()
      themeObserver.disconnect()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    />
  )
}
