const Modal = {
  open_close() {
    const classes = document.querySelector('.modal-overlay').classList
    const result = classes.toggle('active')

    if (result) {
      document.querySelector('.modal-overlay').classList.add('active')
    } else {
      document.querySelector('.modal-overlay').classList.remove('active')
    }
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/20/21'
  },
  {
    id: 2,
    description: 'Criação website',
    amount: 500000,
    date: '23/01/20/21'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/20/21'
  }
]

const Transaction = {
  incomes() {
    // Somar as entradas
  },
  expenses() {
    // Somar as saídas
  },
  total() {
    // Entradas - Saídas
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)
  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

    const amout = Utils.formatCurrency(transaction.amount)

    const html = `
      <td class="description">${transaction.description}</td>
      <td class=${CSSclass}>${amout}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação" />
      </td>
    `
    return html
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : ''
  }
}

transactions.forEach(function (transactions) {
  DOM.addTransaction(transactions)
})
