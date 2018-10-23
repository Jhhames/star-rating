var vue = new Vue({
    el: '#app-root',
    data: {
        starNumber: 0
    },
    methods: {
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