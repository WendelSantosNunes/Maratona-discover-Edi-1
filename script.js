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
    date: '23/01/2021'
  },
  {
    id: 2,
    description: 'Criação website',
    amount: 500000,
    date: '23/01/2021'
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
  }
]

const Transaction = {
  all: transactions,

  add(transaction) {
    Transaction.all.push(transaction)

    App.reload()
  },

  incomes() {
    let income = 0
    // pegar todas as transações
    // para cada transação
    Transaction.all.forEach(transaction => {
      // se ela for maior que zero
      if (transaction.amount > 0) {
        // Somar a uma variável e retorna a variável
        income += transaction.amount
      }
    })

    return income
  },

  expenses() {
    let expense = 0
    // pegar todas as transações
    // para cada transação
    Transaction.all.forEach(transaction => {
      // se ela for menor que zero
      if (transaction.amount < 0) {
        // Somar a uma variável e retorna a variável
        expense += transaction.amount
      }
    })

    return expense
  },

  total() {
    return Transaction.incomes() + Transaction.expenses()
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
  },
  updateBalance() {
    document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    )
    document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    )
    document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(
      Transaction.total()
    )
  },
  clearTransactions() {
    DOM.transactionsContainer.innerHTML = ''
  }
}

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : ''

    value = String(value).replace(/\D/g, '')

    value = Number(value) / 100

    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    return signal + ' ' + value
  }
}

const App = {
  init() {
    Transaction.all.forEach(transactions => {
      DOM.addTransaction(transactions)
    })

    DOM.updateBalance()
  },
  reload() {
    DOM.clearTransactions()
    App.init()
  }
}

App.init()

Transaction.add({
  id: 39,
  description: 'Hello',
  amount: 200,
  date: '23/01/2021'
})
