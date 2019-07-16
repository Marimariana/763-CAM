const initialize = () => {
    printCurrentCard()
    fillModal()
  }
  
  const fillModal = () => {
  
    let payButton = document.getElementById('payButton')
    payButton.disabled = false
  }
  
  const clearModal = () => {
    let accountSummary = document.getElementById('account-summary')
    accountSummary.innerHTML = ''
  }