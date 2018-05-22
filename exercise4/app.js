new Vue({
  el: '#exercise',
  data: {
  	effectClass: {
  		highlight: true,
  		shrink: false
  	},
  	float: 'float',
  	userClass: '',
  	isvisible: true,
  	myStyle: {
  		width: '100px',
  		height: '150px',
  		backgroundColor: 'grey'
  	},
  	progressBar: {
  		width: '0px',
  		backgroundColor: 'red'
  	}
  },
  methods: {
    startEffect: function() {
    	var vm = this;
    	setInterval(function(){
    		vm.effectClass.highlight = !vm.effectClass.highlight;
    		vm.effectClass.shrink = !vm.effectClass.highlight;
    	}, 5000)
    },
    startProgress: function(){
    	var vm = this;
    	var width = 0;
    	setInterval(function(){
    		if (width<100){
    			width = width + 10;
    		}
    		
    		vm.progressBar.width = width+'px';
    	}, 500)
    }
  }
});
