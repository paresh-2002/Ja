// function toMove(){
//     let id = null;
//     const element = document.getElementById('animation')
//     let pos = 0;
//     clearInterval(id)
//     id = setInterval(frame, 5)
//     function frame(){
//         if(pos == 220){
//             clearInterval(id)
//         }else{
//             pos++;
//             element.style.top = pos + 'px';
//             element.style.left = pos + 'px';
//             if(pos == 220){
//                 document.getElementById('demo').innerHTML = Date();
//             }
//         }
//     }
    
// }

// oninput Event and onchange Event
    // function upperCase(){
    //     const input = document.getElementById('fName');
    //     input.value = input.value.toUpperCase();
    //     const onChange = document.getElementById('lName');
    //     onChange.value = onChange.value.toUpperCase();
    // }

// onmouseover and onmouseout Events
    // function mOver(obj){
    //     obj.innerHTML = 'Thank you'
    //     obj.style.backgroundColor = 'cyan'
    //     obj.innerHTML = 'Release Me'
    // }
    // function mOut(obj){
    //     obj.innerHTML = 'Mouse Over'
    //     obj.style.backgroundColor = '#D94A38'
    //     obj.innerHTML = 'Thank You'
    // }
// onmousedown, onmouseup and onclick Events
    // function bulbOn(){
    //     document.getElementById('image').src = 'https://www.w3schools.com/js/bulbon.gif'
    // }
    // function bulbOff(){
    //     document.getElementById('image').src = 'https://www.w3schools.com/js/bulboff.gif'
    // }

// onload Event
    // function onLoad(){
    //     alert('This Message was triggered from the load event')
    // }
// onfocus Event   
    // function onFocus(){
    //     let focus = document.getElementById('fName')
    //     focus.style.background = 'gray'
    // }

    // Events Listener
    // const Btn = document.getElementById('idBtn');

// This is an external "named" function
    // Btn.addEventListener('click', myDate)
    // function myDate(){
    //     document.getElementById('demo').innerHTML = Date().toLocaleString('en-GB', { timeZone: 'UTC' }); 
    // }
// This is an inline "named" function
    // Btn.addEventListener('click', function(){ document.getElementById('demo').innerHTML = Date();})
    // Btn.addEventListener('mouseover', mouseOver)
    // Btn.addEventListener('click', btnClick)
    // Btn.addEventListener('mouseout', mouseOut)

    // function mouseOver(){
    //     document.getElementById('demo').innerHTML += 'Mouse Over!<br>'
    // }
    // function btnClick(){
    //     document.getElementById('demo').innerHTML += 'Click It!<br>'
    // }
    // function mouseOut(){
    //     document.getElementById('demo').innerHTML += 'Mouse Out!<br>'
    // }

    // window.addEventListener('resize', function(){document.getElementById('demo').innerHTML = Math.random()})
    // let p1 = 5;
    // let p2 = 3;
    // Btn.addEventListener('click', function(){myFunction(p1, p2);});
    // function myFunction(a,b){
    //     document.getElementById('demo').innerHTML = (a * b)
    // }

// Bubbling = false - In bubbling the inner most element's event is handled first and then the outer
// Capturing = true - In capturing the outer most element's event is handled first and then the inner
    // document.getElementById('myP1').addEventListener('click', function(){
    //     alert('You clicked the white element!')
    // }, false);
    // document.getElementById('myDiv1').addEventListener('click', function(){
    //     alert('You clicked the Orange element!')
    // }, false);
    // document.getElementById('myP2').addEventListener('click', function(){
    //     alert('You clicked the white element!')
    // }, true);
    // document.getElementById('myDiv2').addEventListener('click', function(){
    //     alert('You clicked the Orange element!')
    // }, true);

    // document.getElementById('myDiv1').addEventListener('mousemove', myFunction)
        
    // function myFunction(){
    //     document.getElementById('demo').innerHTML = Math.random();
    // }

    // function removeElement(){
    //     document.getElementById('myDiv1').removeEventListener('mousemove', myFunction)
    // }

// Creating New HTML Elements and appendChild()
    // let paragraph = document.createElement('p')
    // let innerText = document.createTextNode('This is new Paragraph!')
    // paragraph.appendChild(innerText);

// insertBefore()
    // let element = document.getElementById('myDiv1')
    // let child = document.getElementById('child')
    // element.insertBefore(paragraph,child);

// To remove an HTML element, use the remove() method:
    // function removeElement(){
    //     paragraph.remove()
    // }
// The remove() method does not work in older browsers, see the example below on how to use removeChild() instead
    // function removeElement(){
    //     element.removeChild(paragraph) //same as
    //     paragraph.parentNode.removeChild(paragraph)
    // }    
// To replace an element to the HTML DOM, use the replaceChild() method:
    // element.replaceChild(paragraph,child);

// HTMLCollection Object
// An HTMLCollection is a collection of document elements.
// HTMLCollection items can be accessed by their name, id, or index number.
    // const collection = document.getElementsByTagName('p')
    // const Demo = document.getElementById('demo');
    // Demo.innerHTML= 'this is a first Paragraph' + collection[0].innerHTML;
    // Demo.innerHTML = collection.length

    // function changePara(){
    //     for(let i=0;i<collection.length;i++){
    //         collection[i].style.color = 'black'
    //     }
    // }

// querySelectorAll().
// A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).
// NodeList items can only be accessed by their index number.
    // const myNodelist = document.querySelectorAll("p");
    // document.getElementById("demo").innerHTML = "The innerHTML of the second paragraph is: " + myNodelist[1].innerHTML;
