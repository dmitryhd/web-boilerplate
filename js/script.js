window.App = new Vue({
    el: '#app',
    data: {
        message: 'Config editor',
        sampleConfig: {
            param1: true,
            param2: 'hello',
            param3: 1.1,
            weights: {
                w1: 0.1,
                w2: 0.2,
                w3: 0.3,
                w4: 0.3,
            },
        },
        configToRender: []
    },
    methods: {
        sendConfig: function() {
            console.log(JSON.stringify(this.sampleConfig));
        },
        renderConfig: function() {
            var p = this.sampleConfig;
            this.configToRender = [];
            for (var key in p) {
                if (p.hasOwnProperty(key)) {
                    this.configToRender.push({
                        name: key,
                        value: p[key],
                        type: typeof p[key],
                    })
                }
            }
            this.sendConfig();
        }
    },
    mounted: function() {
        this.renderConfig();
    },
})

