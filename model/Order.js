// builder pattern: https://refactoring.guru/design-patterns/builder

class Order {
    /**
     * @typedef {object} Address
     * @property {string} street
     * @property {string} streetNo
     * @property {string} building
     * @property {string} floor
     * @property {string} apartment
     *
     * @typedef {object[]} FoodItems
     * @property {string} FoodItems[0].item - dish name
     * @property {number} FoodItems[0].price - price for one portion
     * @property {number} FoodItems[0].quantity
     *
     * @property {string} [voucher]
     */

    constructor() {
        this.address = {};
        this.foodItems = [];
    }

    /**
     * @param {Address} address
     * @return {Order}
     */
    setAddress(address) {
        this.address.street = address.street.concat(' ').concat(address.streetNo);
        this.address.details = address.building.concat(', ').concat(address.floor).concat(', ').concat(address.apartment);
        return this;
    }

    /**
     * @param {FoodItems} foodItems
     * @return {Order}
     */
    setFoodItems(foodItems) {
        this.foodItems = foodItems;
        return this;
    }

    /**
     * @param {string} voucher
     * @return {Order}
     */
    setVoucher(voucher) {
        this.voucher = voucher;
        return this;
    }

    getOrder() {
        if (!this.foodItems.length) {
            throw new Error('Could not build order. No food items ordered.');
        }

        return this;
    }

    getCost() {
        return this.foodItems.reduce((totalPrice, currentItem) => {
            const {price, quantity} = currentItem;
            totalPrice += quantity * price;
            return totalPrice;
        }, 0);
    }
}

module.exports = Order;