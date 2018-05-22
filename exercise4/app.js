new Vue({
  el: '#exercise',
  data: {
  	effectClass: {
  		highlight: true,
  		shrink: false
  	},
  	float: 'float'
  },
  methods: {
    startEffect: function() {
    	var vm = this;
    	setInterval(function(){
    		vm.effectClass.highlight = !vm.effectClass.highlight;
    		vm.effectClass.shrink = !vm.effectClass.highlight;
    	}, 5000)
    }
  }
});
