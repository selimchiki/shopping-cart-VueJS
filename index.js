products = [
  {id: 1, name: "Fraise", price: 2.0, qty: 1},
  {id: 2, name: "Pomme", price: 1.5, qty: 1},
  {id: 3, name: "Poire", price: 1.7, qty: 1},
  {id: 4, name: "Ananas", price: 2.50, qty: 1}
]

Vue.component('shopping-cart', {
  props: ['items'],

  computed: {
    Total: function() {
      var total = 0;
      this.items.forEach(item => {
        total += (item.price * item.qty);
      });
      return total;
    }
  },

  methods: {
    removeItem(index) {
      this.items.splice(index, 1)
    }
  }
})

const vm = new Vue({
  el: '#app',

  data: {
    cartItems: [],
    items : products
  },

  methods: {
    addToCart(itemToAdd) {
      var found = false;

      this.cartItems.forEach(item => {
        if (item.id === itemToAdd.id) {
          found = true;
          item.qty += itemToAdd.qty;
        }
      });

      if (found === false) {
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      }

			itemToAdd.qty = 1;
    }
  }
})
