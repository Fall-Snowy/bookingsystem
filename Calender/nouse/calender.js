const date = new Date();

const renderCalendar = () => {

    const months = [
        "Jaunary",
        "Frebruary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "Sepember",
        "October",
        "November",
        "December",
    ];
    
    
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    
    document.querySelector(".date p").innerHTML = date.toDateString();
    
    const monthDays = document.querySelector(".days");
    let days="";
    
    const lastDay = new Date(date.getFullYear(),
    date.getMonth()+1,0).getDate();
    console.log("last Day :" + lastDay);
    
    
    date.setDate(1);
    console.log(date.getDay());
    const firstDayIndex = date.getDay();
    
    
    const PrevLastDay = new Date(date.getFullYear(),
    date.getMonth(),0).getDate();
    console.log("Prev Last Day :" + PrevLastDay);
    
    const lastDayIndex = new Date(date.getFullYear(),
    date.getMonth()+1,0).getDay();
    console.log("last Day Index :" + lastDayIndex);
    
    const nextday = 7 - lastDayIndex -1;
    
    for(let x = firstDayIndex; x>0; x--) {
        days+=`<div class="prev-date">${PrevLastDay - x + 1}</div>`;
    }
    
    for(let i = 1; i<=lastDay; i++) {
        if(i === new Date().getDate && date.getMonth() === new Date().getMonth()) {
            days+= `<div class ="today">${i}</div>`
        } else {
            days += `<div>${i}</div>`;
        }
    }
    
    for(let j = 1; j<=nextday; j++) {
        days+=`<div class="next-date">${j}</div>`;
    }

    monthDays.innerHTML = days;


}



document.querySelector(".prev").addEventListener("click",()=>{
    date.setMonth(date.getMonth() -1);
    renderCalendar();
})

document.querySelector(".next").addEventListener("click",()=>{
    date.setMonth(date.getMonth() +1);
    renderCalendar();
})

renderCalendar();