export default class Timer {
    constructor($el) {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.setElement($el)
        this.scheduled = []
        this._format = 'HH:MM:SS'
    }

    setElement($el) {
        if(typeof $el == 'string') return this.$el = document.querySelector($el)
        if($el.jquery) return this.$el = $el.get()[0]
        if($el[0]) return this.$el = $el[0]
        return this.$el = $el
    }

    start() {
        if(this.hasNoNode()) return
        this.runner = setInterval(() => {
            this.seconds++
            if(this.seconds >= 60) {
                this.minutes++
                this.seconds = 0
                if(this.minutes >= 60) {
                    this.hours++
                    this.minutes = 0
                }
            }
            this.render()
        }, 1000)

        this.startActions()
    }

    stop() {
        clearInterval(this.runner)
        this.stopActions()
    }

    resume() {
        this.start()
    }

    clearActions() {
        this.stopActions()
        this.scheduled = []
    }

    stopActions() {
        for(let i = 0; i < this.scheduled.length; i++) {
            clearInterval(this.scheduled[i].runner)
        }
    }

    startActions() {
        for(let i = 0; i < this.scheduled.length; i++) {
            this.scheduled[i].runner = setInterval(this.scheduled[i].callback, this.scheduled[i].interval)
        }
    }

    every(interval, callback) {
        this.scheduled.push({
            interval,
            callback
        })
    }

    format(format) {
        this._format = format
    }

    render() {
        if(this.hasNoNode()) return
        this.$el.innerHTML = this.applyFormat()
    }

    applyFormat() {
        let string = this._format
        string = string.replace('HH', this.addZero(this.hours))
        string = string.replace('hh', this.hours)
        string = string.replace('MM', this.addZero(this.minutes))
        string = string.replace('mm', this.minutes)
        string = string.replace('SS', this.addZero(this.seconds))
        string = string.replace('ss', this.seconds)
        return string
    }

    addZero(number) {
        if(number >= 10) return number
        return '0' + number
    }

    hasNoNode() {
        let cond = !this.$el
        if(cond) console.error('Cannot render, please bind a DOM element to the timer')  
        return cond
    }
}