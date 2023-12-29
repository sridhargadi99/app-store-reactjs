// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-container">
      <img src={imageUrl} className="app-style" alt={appName} />
      <p className="app-heading-style">{appName}</p>
    </li>
  )
}

export default AppItem
