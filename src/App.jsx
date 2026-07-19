import { useState } from 'react'
import { createPortal } from 'react-dom'

function HarnessLogo() {
  return <img src="/harnesslogo.avif" alt="Harness" className="harness-logo-img" />
}

function ThankYouPortal({ onClose }) {
  return createPortal(
    <div className="portal-overlay" onClick={onClose}>
      <div className="portal-card" onClick={(e) => e.stopPropagation()}>
        <div className="portal-glow" />
        <div className="portal-inner">
          <div className="logo-wrap">
            <HarnessLogo />
          </div>
          <div className="brand">Harness</div>
          <h1 className="title">Thank you for watching<br />this Harness TidBit</h1>
          <p className="subtitle">
            We hope you picked up something useful. Keep shipping with confidence.
          </p>
          <div className="divider" />
          <button className="close-btn" onClick={onClose}>Close</button>
          <div className="tagline">Software Delivery, Simplified</div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function App() {
  const [open, setOpen] = useState(true)
  return (
    <div className="app">
      <div className="grid-bg" />
      <button className="launch-btn" onClick={() => setOpen(true)}>
        Open Thank You Portal
      </button>
      {open && <ThankYouPortal onClose={() => setOpen(false)} />}
    </div>
  )
}
