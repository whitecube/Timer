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

#### `timer.format(formatString)`
Formats the timer. Pass it a string where:
- 'HH' will be replaced by hours (with a zero in front if less than 10)
- 'hh' will be replaced by hours
- 'MM' will be replaced by minutes (with a zero in front if less than 10)
- 'mm' will be replaced by minutes
- 'SS' will be replaced by seconds (with a zero in front if less than 10)
- 'ss' will be replaced by seconds

Ex:  
```javascript
timer.format('HH:MM:SS')   // 00:12:36
timer.format('hh MM SS')   // 0 12 36
timer.format('HHhMMmSSs')  // 00h12m36s

```
The format is set to `'HH:MM:SS'` by default (as seen in the first example).

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

#### `timer.stop()`
Stops the timer and all the registered actions, but keeps everything in memory to allow resuming later.

<br>

#### `timer.resume()`
Resumes the timer. Alias for `timer.start()`.

<br>

#### `timer.stopActions()`
Stops all actions registered, but keeps them in memory to restart them later.

<br>

#### `timer.startActions()`
Starts the registered actions (only useful if you have stopped them beforehand using `timer.stopActions()`).

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