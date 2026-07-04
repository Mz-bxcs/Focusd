import './PhoneFrame.css'

// Purely decorative on wide viewports — shows the app inside an
// iPhone-shaped bezel, like a device showcase. On an actual phone
// the media query in PhoneFrame.css never activates, so this
// renders as a plain full-width wrapper with no visual effect.
export default function PhoneFrame({ children }) {
  return (
    <div className="phone-frame-backdrop">
      <div className="phone-frame">
        <div className="phone-frame-notch" aria-hidden="true" />
        <div className="phone-frame-screen">{children}</div>
      </div>
    </div>
  )
}
