package com.media.EventReservation.Repo;

import com.media.EventReservation.Model.EventData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataRepo extends JpaRepository<EventData, Integer> {


}
