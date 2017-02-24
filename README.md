# Timer

This utility displays a timer in the page and allows you to bind actions to your desired intervals.  
An example use case for this would be a page that sends an ajax request every x seconds and gives an elapsed time as feedback to the user.

![An example counter](./img/counter.png)

## Documentation

#### To create a new timer, do

```javascript
let timer = new Timer($el)
```

where `$el` represents the DOM node you want to bind the timer to.
`$el` can be the following:
- A vanilla javascript DOM node
- A jQuery element
- A selector string

<br>

#### `timer.start()`
Starts the timer.

<br>

#### `timer.every(interval, callback)`
Schedules an action that will execute at the specified interval.  
Ex:
```javascript
timer.every(5000, () => {
  console.log('hello!')
})
```

<br>

#### `timer.setElement($el)`
Changes the DOM node the timer is bound to.  
Ex:
```javascript
timer.setElement('.parent .timer')
// or
timer.setElement($('.parent .timer'))
// or
timer.setElement(document.getElementById('timer'))
```