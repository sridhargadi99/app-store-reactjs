// Write your code here
import './index.css'

const TabItem = props => {
  const {listDetails, byClickingTab, activeIdStatus} = props
  const {tabId, displayText} = listDetails
  const clickButton = () => {
    byClickingTab(tabId)
  }
  const changeStyle = activeIdStatus ? 'change-button-style' : ''
  return (
    <li className="list-container">
      <button
        className={`tab-button-style ${changeStyle}`}
        type="button"
        onClick={clickButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
