package com.media.EventReservation.Service;

import com.media.EventReservation.Model.EventData;
import com.media.EventReservation.Repo.DataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataService {

    @Autowired
    DataRepo dataRepo;
    public List<EventData> getEvents() {
        return dataRepo.findAll();

    }

    public String registerEvent(EventData event) {
         dataRepo.save(event);
         return "Success";
    }
}
