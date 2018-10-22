var vue = new Vue({
    el: '#app-root',
    data: {
        jhhames: true,
        list: [],
        name: '',
        details: '',
        starNumber: 0
    },
    methods: {
        // changeToVue: function() {
        //     this.jhhames = !this.jhhames;
        // },
        // doNotSubmit: function(e) {
        //     if (this.name == '') {
        //         alert("Fuck you motherlover!");
        //     }
        //     this.list.push({
        //         name: this.name,
        //         details: this.details
        //     });

        //     this.name = ''
        //     this.details = ''
        //     e.preventDefault();
        // },
        // validateName: function() {
        //     if (this.name == '') {
        //         return true
        //     } else {
        //         return false
        //     }
        // },
        hoverEffect: function(i) {
            for (let j = 1; j <= i; j++) {
                $('.star-' + j).addClass('hover-color');
            }
            if (i < this.starNumber) {
                for (let a = i + 1; a <= this.starNumber; a++) {
                    $('.star-' + a).removeClass('click-color')
                }
            }
        },
        removeColor: function(n) {
            for (let i = 0; i <= 5; i++) {
                $('.star-' + i).removeClass('hover-color');
            }
        },
        starClicked: function(n) {
            this.starNumber = n
            for (let i = 0; i <= 5; i++) {
                $('.star-' + i).removeClass('click-color')
            }
            for (let i = 0; i <= this.starNumber; i++) {
                $('.star-' + i).addClass('click-color')
            }
        }
    },
    mounted() {

    }
})