// fill in javascript code here
let myform=document.querySelector('form');

myform.addEventListener('submit',function(e){
    e.preventDefault()

    let name=document.getElementById('name').value;
    let docterID=document.getElementById('docID').value;
    let specialization=document.getElementById('dept').value;
    let experience=document.getElementById('exp').value;
    let email=document.getElementById('email').value;
    let mobile=document.getElementById('mbl').value;

    let role;

    if(experience>5){
        role='Senior'
    }else if(experience<=2 &&experience>=5){
        role='Junior'
    }else{
        role='Trainee'
    }

    let tbody = document.querySelector('tbody');
    let row = document.createElement('tr');

    let data=[name,docterID,specialization,experience,email, mobile]

    data.forEach((ele)=>{
        let td=document.createElement('td');
        td.innerText=ele;
        row.appendChild(td);
    })
    let deleteTd=document.createElement('td');
    let deletebtn=document.createElement('button');
    deletebtn.innerText='Delete'

    deletebtn.addEventListener('click',function(){
        tbody.removeChild(row);
    })
    
    deleteTd.appendChild(deletebtn);

    row.appendChild(deleteTd);

    tbody.appendChild(row);

})

