new Vue({
    el: '#app',
    data: {
        start_apple: {
            'S': true,
            'H': true,
            'A': true
        },
        apple_array: [],
        game_count: 0,
        change_1: null,
        change_2: null
    },
    methods: {
        set_apple: function (apple_name) {
            this.apple_array.push(apple_name)
            this.start_apple[apple_name] = false
        },
        cencel_apple: function (apple_name, index) {
            this.apple_array.splice(index, 1)
            this.start_apple[apple_name] = true
        },
        reset_apple: function () {
            this.start_apple = {
                'S': true,
                'H': true,
                'A': true
            },
                this.apple_array = []
        },
        next_game: function () {
            this.reset_apple()
            this.change_1 = null
            this.change_2 = null
            this.game_count += 1
        },
        reset: function () {
            this.reset_apple()
            this.change_1 = null
            this.change_2 = null
            this.game_count = 0
        }
    },
    computed: {
        sort_apple: function () {
            var change_1 = this.change_1
            var change_2 = this.change_2
            switch (change_1) {
                case 1:
                    switch (change_2) {
                        case 1:
                            return [0, 1, 2]
                        case 2:
                            return [1, 0, 2]
                        case 3:
                            return [2, 1, 0]
                    }
                case 2:
                    switch (change_2) {
                        case 1:
                            return [0, 2, 1]
                        case 2:
                            return null
                        case 3:
                            return null
                    }
                case 3:
                    switch (change_2) {
                        case 1:
                            return [0, 1, 2]
                        case 2:
                            return [1, 2, 0]
                        case 3:
                            return [2, 0, 1]
                    }
            }

        }
    },
})