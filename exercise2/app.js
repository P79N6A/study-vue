new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
        	alertMe: function(){
        		alert();
        	},
        	store: function(event){
        		this.value = event.target.value;
        	},
        	store_enter: function(event){
        		this.value = event.target.value;
        	}
        }
    });