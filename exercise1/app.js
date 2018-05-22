new Vue({
	el: "#exercise",
	data: {
		name: "Xinwei",
		age: 24,
		link: "https://cn.vuejs.org/images/logo.png"
	},
	methods: {
		multiply3: function(){
			return this.age*3;
		},
		random: function(){
			return Math.random();
		}
	}
});