package com.media.EventReservation.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalTime;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventid;
    private String eventName;
    private String hostName;
    private String hostEmail;
    private String eventLocation;
    private String deptName;
    private String micsNeeded;
    private String recording;
    private String eventType;
    private String computerAsst;
    private String conferenceTool;
    private String wifiAccess;
    private String extraInformation;

    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime startTime;
    private LocalTime endTime;

    public EventData(String eventName, String hostName, String hostEmail, String deptName, String eventLocation, String micsNeeded, String eventType, String recording, String computerAsst, String wifiAccess, String extraInformation, String conferenceTool, LocalDate startDate, LocalDate endDate, LocalTime startTime, LocalTime endTime) {
        this.eventName = eventName;
        this.hostName = hostName;
        this.hostEmail = hostEmail;
        this.deptName = deptName;
        this.eventLocation = eventLocation;
        this.micsNeeded = micsNeeded;
        this.eventType = eventType;
        this.recording = recording;
        this.computerAsst = computerAsst;
        this.wifiAccess = wifiAccess;
        this.extraInformation = extraInformation;
        this.conferenceTool = conferenceTool;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startTime = startTime;
        this.endTime = endTime;
    }


    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public String getHostEmail() {
        return hostEmail;
    }

    public void setHostEmail(String hostEmail) {
        this.hostEmail = hostEmail;
    }

    public String getEventLocation() {
        return eventLocation;
    }

    public void setEventLocation(String eventLocation) {
        this.eventLocation = eventLocation;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName;
    }

    public String getRecording() {
        return recording;
    }

    public void setRecording(String recording) {
        this.recording = recording;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public String getMicsNeeded() {
        return micsNeeded;
    }

    public void setMicsNeeded(String micsNeeded) {
        this.micsNeeded = micsNeeded;
    }

    public String getComputerAsst() {
        return computerAsst;
    }

    public void setComputerAsst(String computerAsst) {
        this.computerAsst = computerAsst;
    }

    public String getConferenceTool() {
        return conferenceTool;
    }

    public void setConferenceTool(String conferenceTool) {
        this.conferenceTool = conferenceTool;
    }

    public String getWifiAccess() {
        return wifiAccess;
    }

    public void setWifiAccess(String wifiAccess) {
        this.wifiAccess = wifiAccess;
    }

    public String getExtraInformation() {
        return extraInformation;
    }

    public void setExtraInformation(String extraInformation) {
        this.extraInformation = extraInformation;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }




}
