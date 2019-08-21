new Vue({
    el: "#vue-app", //give ID

    //save data in Vue.js and export data to html
    data: {
        name: 'Kim',
        job: 'Web developer',
        age: 26,
        school: "",
        year: "",
        x: 0,
        y: 0,
        website: 'http://www.dkimportfolio.com',
        websiteTag: '<a href="http://www.dkimportfolio.com">dkim</a>',
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        //string
        characters: ['kim', 'sam', 'park', 'jawun'],
        //object
        infos: [

            { name: 'lee', age: 22 },
            { name: 'Yoshi', age: 36 },
            { name: 'kevin', age: 44 },

        ]

    },
    methods: {
        greet: function (time) {

            return 'Good' + time + ' ' + this.name;
        },
        add: function (inc) {
            this.age += inc;
        },
        subtract: function (dec) {
            this.age -= dec;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function () {
            alert("hi");
        },

        logName: function () {
            console.log('you entered your name');
        },

        logAge: function () {
            console.log('you entered your age');
        },



    },

    //when you need caching
    computed: {

        addToA: function () {
            return this.a + this.age
        },

        addToB: function () {
            return this.b + this.age
        },
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});


