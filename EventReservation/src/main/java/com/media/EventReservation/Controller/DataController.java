package com.media.EventReservation.Controller;


import com.media.EventReservation.Model.EventData;
import com.media.EventReservation.Service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

}
