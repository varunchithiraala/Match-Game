import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, changeTab} = props
  const {tabId, displayText} = tabDetails
  const tabItemClassName =
    activeTabId === tabId ? 'tab-item active-tab-item' : 'tab-item'

  const onClickTabItem = () => {
    changeTab(tabId)
  }

  return (
    <li className="tab-list-item">
      <button
        className={tabItemClassName}
        onClick={onClickTabItem}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
