package com.media.EventReservation.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


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

    public EventData() {
        this.eventName = "Default Event";
        this.hostName = "Default Host";
        this.hostEmail = "default@example.com";
        this.eventLocation = "Default Location";
        this.deptName = "Default Department";
        this.micsNeeded = "No";
        this.recording = "No";
        this.eventType = "In-Person";
        this.computerAsst = "No";
        this.conferenceTool = "None";
        this.wifiAccess = "No";
        this.extraInformation = "No additional info";
    }


    public EventData(String eventName, String hostName, String hostEmail, String eventLocation, String recording, String eventType, String micsNeeded, String deptName, String computerAsst, String conferenceTool, String wifiAccess, String extraInformation) {
        this.eventName = eventName;
        this.hostName = hostName;
        this.hostEmail = hostEmail;
        this.eventLocation = eventLocation;
        this.recording = recording;
        this.eventType = eventType;
        this.micsNeeded = micsNeeded;
        this.deptName = deptName;
        this.computerAsst = computerAsst;
        this.conferenceTool = conferenceTool;
        this.wifiAccess = wifiAccess;
        this.extraInformation = extraInformation;
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

    public String getMicsNeeded() {
        return micsNeeded;
    }

    public void setMicsNeeded(String micsNeeded) {
        this.micsNeeded = micsNeeded;
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
}
