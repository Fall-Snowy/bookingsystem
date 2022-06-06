const bigBoxDOM = document.querySelector(".bigBox");
const formDOM = document.querySelector(".formfunction");
const StartDateDOM = document.getElementById("startDate");
const EndDateDOM = document.getElementById("endDate");
const NameDOM = document.getElementById("Name");
const appsDOM = document.getElementById("apps");
const submitDOM = document.getElementById("submit");
const deleteDOM = document.getElementById("delete");


let inputName = "";
let inputApps = "";
let insertSDate = "";
let insertEDate = "";
let clickstatus = "";


const getAllBooksys = async () => {
    try {
        let allBook = await axios.get("/api/Booksys");
        console.log(allBook)
        let {data} = allBook;
        console.log(data);

        //output
        allBook = data.map((Booksystem) => {
            console.log(Booksystem);
            const {Name,App,BookingStartDate,BookingEndDate} = Booksystem;
            console.log(Name,App,BookingStartDate,BookingEndDate);
            return `
            <div class="infobox" id="infobox">
            <h5>StartDate: ${BookingStartDate} EndDate: ${BookingEndDate}</h5>
            <p style="font-size: 10px;">Name: ${Name}
            </br>
            App:${App}</p>
            </div>
            `; 
        }).join("");
        bigBoxDOM.innerHTML = allBook;
    } catch (err) {
        console.log(err);
    }
};

getAllBooksys();

//POST
NameDOM.addEventListener("change",(e) => {
    inputName = e.target.value
    console.log(inputName);
});

appsDOM.addEventListener("change",(e) => {
    inputApps = e.target.value
    console.log(inputApps);
});

StartDateDOM.addEventListener("change",(e) => {
    insertSDate = e.target.value
    console.log(insertSDate);
});

EndDateDOM.addEventListener("change",(e) => {
    insertEDate = e.target.value
    console.log(insertEDate);
});

deleteDOM.addEventListener("click",(e) => {
    clickstatus = e.target.value;
    console.log(clickstatus);
})

submitDOM.addEventListener("click",(e) => {
    clickstatus = e.target.value;
    console.log(clickstatus);
})

formDOM.addEventListener("submit",async(e) => {
    e.preventDefault();
    if (clickstatus == "提交") {
        if (inputName && inputApps && insertSDate && insertEDate) {
            console.log("add Data");
            try {
                await axios.post("/api/Booksys", {
                    Name: inputName,
                    App: inputApps,
                    BookingStartDate:insertSDate,
                    BookingEndDate:insertEDate,
                 });
                 await axios.post("/api/calevent", {
                    title:inputName + " & " + inputApps,
                    start:insertSDate,
                    end:insertEDate,
                    description:inputApps,
                 });
                getAllBooksys();
            } catch(err) {
                console.log(err);
            }
        }
    } else if(clickstatus == "刪除") {
        if (inputName) {
            console.log("deletesuccess");
            try {
                await axios.delete("/api/Booksys/" + inputName);
                await axios.delete("/api/calevent/" + inputName);
                getAllBooksys();
            } catch(err) {
                console.log(err);
            }
        }
    }
});