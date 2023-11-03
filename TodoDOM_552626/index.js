let myForm=document.querySelector('form');
let inptask=document.getElementById('task');
let priority=document.getElementById('priority');
let tbody=document.querySelector('tbody');
let Alldata=[]

myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let data={}
    data.input1=inptask.value;
    data.input2=priority.value;
    Alldata.push(data)
    tbody.innerHTML=null;
    Alldata.map((ele)=>{
        let row=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');

        td1.innerText=ele.input1;
        td2.innerText=ele.input2;
        row.append(td1,td2);
        tbody.append(row)
    })
})
