import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconSearch } from '@tabler/icons-react'
import styles from './TrackInput.module.css'

export default function TrackInput() {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim()) {
      navigate(`/tracking?id=${encodeURIComponent(value.trim())}`)
    }
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <IconSearch size={18} className={styles.icon} />
        <input
          type="text"
          className={styles.input}
          placeholder="Enter tracking number or shipment ID..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button type="submit" className={styles.btn}>
        Track Shipment
      </button>
    </form>
  )
}
