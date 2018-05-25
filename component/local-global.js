var cmp=  {
    data: function(){
        return {
            status: "critical"
        };
    },
    template: "<p>Server status: {{status}} (<button @click='changeStatus'>Change</button>)</p>",
    methods: {
        changeStatus: function(){
            this.status = "normal";
        }
    }

};


new Vue({
    el: "#app1",
    components: {
    "my-cmp": cmp
    }
});

new Vue({
    el:"#app2",
    components:{
        "my-cmp": cmp
    }

});
