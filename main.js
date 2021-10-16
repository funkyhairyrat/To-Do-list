var list = document.querySelector("ul")
var pointsElement =  document.querySelector("#points")
var points = window.localStorage.getItem('points')
var existing = window.localStorage.getItem('todo')

existing = JSON.parse(existing)
console.log(existing)

existing.forEach(function(element, index) {
    var listItem = document.createElement("li")
    var button = document.createElement("button")
    button.innerText = "x"
    button.addEventListener("click", function () 
    {
        points++
        pointsElement.innerText = points
        window.localStorage.setItem('points', points)
        listItem.remove()
        delete existing[index]
        // todo = todo.filter(function(value, position ){
        //     console.log('position',position)
        //     console.log('index',index)
        //     console.log(position !== index)
        //     return position !== index
        // })
        console.log(existing)
        existing = JSON.stringify(existing)
        window.localStorage.setItem('todo', existing) 
    });
    listItem.innerText = element
    listItem.append(button)
    list.append(listItem)
});

function addList()
{
    

    if(document.querySelector("input").value !== "")
    {
        var input = document.querySelector("input").value
    

        var todo = window.localStorage.getItem('todo')

        console.log(todo)
        todo = JSON.parse(todo)

        todo.push(input)

        todo = JSON.stringify(todo)

        console.log(todo)

        window.localStorage.setItem('todo', todo)

        var listItem = document.createElement("li")
        var button = document.createElement("button")
        button.innerText = "x"
        button.addEventListener("click", function () 
        {
            points++
            pointsElement.innerText = points
            window.localStorage.setItem('points', points)
        });
        listItem.innerText = input
        listItem.append(button)

    

    
        list.append(listItem)

        document.querySelector("input").value = ''
        
    }


}
function clearAll()
{
    list.innerText = ""
    window.localStorage.setItem('todo','[]')
}
