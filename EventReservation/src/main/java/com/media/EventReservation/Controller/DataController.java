package com.media.EventReservation.Controller;


import com.media.EventReservation.Model.EventData;
import com.media.EventReservation.Service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8000")
@RequestMapping("/data")
@RestController
public class DataController {
    @Autowired
    DataService dataService;

    @RequestMapping("home")
    public String getMessage(){
        return "Hello Welcome";
    }

    @GetMapping("events")
    public List<EventData> getEvents(){

        return dataService.getEvents();
    }

    @PostMapping("register")
    public String registerEvent(@RequestBody EventData event){
        return dataService.registerEvent(event);
    }

}
