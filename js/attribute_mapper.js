
Vue.component('config-editor', {
    template: `
    <table class="table small-table col sm-6">
    <thead></thead>
    <tbody>
        <tr v-for='(value, key) in config'>
            <td class=no-padding>{{ key }}</td>
            <td class=no-padding>
                <span v-if="typeof config[key] == 'boolean'">
                    <input type="checkbox" id="checkbox" v-model="config[key]">
                    <label for="checkbox">{{ config[key] }}</label>
                </span>
                <span v-if="typeof config[key] == 'string'">
                    <input v-model="config[key]">
                </span>
                <span v-if="typeof config[key] == 'number'">
                    <input v-model.number="config[key]" type="number">
                </span>

                <span v-if="typeof config[key] == 'object'">
                    <!-- {{ config[key] }} -->

                    <table>
                        <tr v-for="(innerValue, innerKey) in config[key]">
                            <td class=no-padding>
                                {{ innerKey}}
                            </td>
                            <td class=no-padding>
                                <span v-if="typeof config[key][innerKey] == 'number'">
                                    <input v-model.number="config[key][innerKey]" type="number">
                                </span>
                            </td>
                        </tr>
                    </table>
                </span>
            </td>
        </tr>
    </tbody>
</table>
    `,
    props: ['config'],
})

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

