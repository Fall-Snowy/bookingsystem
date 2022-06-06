document.addEventListener('DOMContentLoaded', function() {

    const getAllBooksys = async () => {
        try {
            let allBook =  await axios.get("/api/calevent");
            console.log(allBook);
            let {data} = allBook;
            console.log(data);

            //output
            var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                height:520,
                locale:"zh-tw",
                navLinks: true,
                headerToolbar:{
                    left:"prev,next today",
                    center:"title",
                    right:"dayGridMonth,timeGridWeek,timeGridDay"
                },
                events:data
                // event:[{
                //     title:Name,
                //     start:BookingStartDate,
                //     end:BookingEndDate
                // }]
                
            });
            calendar.render()


        } catch (err) {
            console.log(err);
        }
    
    
    };
    getAllBooksys();

});








  