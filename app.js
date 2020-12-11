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
    },
    template: `
    <div>
        <h3>Vue Identicon Generator</h3>
        <div>
            Input:
            <input type="text" v-on:input="onInput">
            <div>
                Output:
                <div v-html="identicon"></div>
            </div>
        </div>
    </div>
    `
});