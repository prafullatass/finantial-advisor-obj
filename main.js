// Company (enumerable, writable, property)
// Specialty (enumerable, writable, property)
// Name (enumerable, property)
// Portfolio (non-enumerable, property) - Should display the stocks the advisor currently holds
// Worth (non-enumerable, method)
// Purchase (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
// Sell (non-enumerable, method) - This method takes a stock ticker symbol, a quantity, and a price as arguments
const advisor = Object.create(null, {
    company: {
        value: "ABC",
        writable: true,
        enumerable: true
    },

    Specialty: {
        value: "Stock Agent",
        enumerable: true,
        writable: true
    },

    Name: {
        value: "Sylvester",
        enumerable: true
    },
    Portfolio: {
        value: []
    }, //Should display the stocks the advisor currently holds
    Worth: {
        value : 0,
    writable:true },

    Purchase: {
        value: (name, qty, price) => {
            advisor.Portfolio.push(name)
            advisor.Worth += price * qty
            console.log(advisor.Worth)
            document.querySelector("#root").innerHTML +=
            `Purchase : Your Potfolio has ${advisor.Portfolio.join(", ")} stocks worh $${advisor.Worth} <hr/>`
        }
    },
    Sell: {
        value: (name, qty, price) => {

            advisor.Portfolio.slice(
                advisor.Portfolio.find((arrayname,idx) => arrayname === name? idx:null)
            )
            advisor.Worth -= price * qty
            document.querySelector("#root").innerHTML +=
            `Sell : Your Potfolio has ${advisor.Portfolio.join(", ")} stocks worh $${advisor.Worth} <hr/>`
        }
    }
}
)

for (let key in advisor) {
        const element = advisor[key];
        document.querySelector("#root").innerHTML += `${key} ${element} <hr/>`

}

console.log(advisor)

advisor.Purchase("costco", 12,2)

advisor.Purchase("infosys", 1200,1)
advisor.Sell("costco", 12,2)