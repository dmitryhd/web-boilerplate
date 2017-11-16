
function byId(element, index, array) {
    return
    return element > 1;
}

window.App = new Vue({
    el: '#app',
    data: {
        goodList: [],
        badList: [],
        initialWords: [
            {'word': 'a', 'id': 0},
            {'word': 'b', 'id': 1},
            {'word': 'b', 'id': 2},
            {'word': 'b', 'id': 3},
            {'word': 'b', 'id': 4},
            {'word': 'b', 'id': 5},
            {'word': 'b', 'id': 6},
        ],
    },
    methods: {
        sendConfig: function() {
            console.log(JSON.stringify({
                good: this.goodList,
                bad: this.badList,
            }));
        },
        modeWordTo: function(id, to) {
            // remove
            idx = this.initialWords.findIndex(
                function(element, index, array){
                    if (element.id == id) {
                        return true;
                    }
                    return false;
                });
            obj = this.initialWords[idx];
            console.log('To ' + to + ' ' + obj + ', id = ' + id);
            this.initialWords.splice(idx, 1);
            if (to == 'good') {
                this.goodList.push(obj);
            } else {
                this.badList.push(obj);
            };
        }
    },
    mounted: function() {
        console.log('gogo');
    },
})

