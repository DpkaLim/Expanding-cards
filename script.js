const panels = document.querySelectorAll('.panel')
/*here, we're declaring a variable caled panels that selects all of the elements with 
class name panel

the first line is a foreach loop that loops over all the panel elements. 
a function has been added 
with the arrow function. inside the function, we have added an event listener 
to the panel element to listen for any clicks. when clicked, it will activate 
the removeActiveClasses function and remove the active class from the element
and also add a class to the panel called Active.*/
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

/*this is where the above loop knows what to do when it sees the removeactive
function. it is saying to loop over the panel and then remove the class called active*/

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}