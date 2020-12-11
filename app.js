new Vue({
    el: '#app',
    data: {
        textInput: ''
    },
    computed: {
        identicon: function () {
            return jdenticon.toSvg(this.textInput, 200);
        }
    },
    methods: {
        onInput: function (event) {
            this.textInput = event.target.value;
        }
    }
});