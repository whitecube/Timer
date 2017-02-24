# Timer

This utility displays a timer in the page and allows you to bind actions to your desired intervals.  
An example use case for this would be a page that sends an ajax request every x seconds and gives an elapsed time as feedback to the user.

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

### Methods

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

<br>

#### `timer.addZero(int)`
Formats a number into a string. Used internally but you can use it if you need it.  
Ex:
```javascript
timer.addZero(timer.seconds)
// If timer.seconds is 9 (int), returns "09" (string)
```

<br>

### Properties
#### `timer.hours`
The number of elapsed hours as an integer. Can be manually set.
#### `timer.minutes`
The number of elapsed minutes as an integer. Can be manually set.
#### `timer.seconds`
The number of elapsed seconds as an integer. Can be manually set.