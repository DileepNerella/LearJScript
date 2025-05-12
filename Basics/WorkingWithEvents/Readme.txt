Working with Events in Javas Script.


Event----> Java Script Event -Handler.

When a user interacts with a web page actionalble controls the events trigger
Javascript event handlers enable the browser to handle such events.

javascript handlers invoke the javascript code to be executed as a reaction to
the event triggered.

when the execution of jascript code is delayted or deffered till some 
event occurs ,the execution is called deffered mode execution.

This makes Javascript an action oriented language.



Inbuilt event handlers.

s.no>---Event ---> Event handler.--->Description.
1-->click-->onclick-->when user clicks an element.
2.-->keypress-->onkeypress--
3.-->keyup-->onkeyup
4.-->load-->onload-->when HTML document is loaded in the browser, event handler onload handles.
5.-->blur-->onblur-->when an element loses the focus.
6.--->chane-->onchange-->when a seletion of checked state change for input selevctor text-area


these event handlers are associated with html elements and are responsible to handle 
or listen the event taking place on the respective element.

sysntax== <html-element  eventhandler="javascript code">

example: <p onclick="executeMe();">hello !</p>

best practice:

Event listeners are the most preferred way to handle events in JavaScript.
 One of the major points to use event listeners is, 
 it does allow us to add multiple event listeners on the same element 
 when compared with the "on" properties like onmouseclick, onmouseover, etc..

Exception handling:

exception handling is accomplished using a try catch statement.
try catch is used to capture any exception in code.

try{

}catch(e){

}
finally{
    <execute irrespective of the out come.>
}

