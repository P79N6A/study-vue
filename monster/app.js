new Vue({
	el: "#app",
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: []
	},
	methods: {
		startGame: function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function(){
			this.playerAttack();
			this.monsterAttack();
		},
		specialAttack: function(){
			this.playerSpecialAttack();
			this.monsterAttack();
		},
		heal: function(){
			if(this.playerHealth <= 90){
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			
			this.turns.unshift({
				isPlayer: true,
				text: "Player heals for 10"
			});
			this.monsterAttack();
		},
		giveUp: function(){
			this.gameIsRunning = false;
		}, 
		playerAttack: function() {
			var damage = this.calculateDamage(3, 10)
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: "Player attacks Monster for " + damage
			});
			if(this.checkWin()){
				return;
			} 
		},
		playerSpecialAttack: function(){
			var damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.unshift({
				isPlayer: true,
				text: "Player attacks Monster hard for " + damage
			});
			if(this.checkWin()){
				return;
			} 
		},
		monsterAttack: function(){
			var damage = this.calculateD amage(5, 12);
			this.playerHealth -= damage;
			this.turns.unshift({
				isPlayer: false,
				text: "Monster attacks Player for " + damage
			});
			if(this.checkWin()){
				return;
			}
		},
		calculateDamage: function(min, max){
			return Math.floor(Math.random() * (max - min + 1) + min);
		},
		checkWin: function(){
			if(this.monsterHealth <= 0){
				if (confirm("You won! New game?")){
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;
			} else if (this.playerHealth <= 0){
				if (confirm("You lose! New game?")){
					this.startGame();
				} else {
					this.gameIsRunning = false;
				}
				return true;	
			} else {
				return false;
			}
		}
	}
});