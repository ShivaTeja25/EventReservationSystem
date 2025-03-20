package com.media.EventReservation.Service;
import com.media.EventReservation.Model.EventData;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.MessagingException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.*;
import java.time.format.DateTimeFormatter;

@Service
public class MailService {
    private final JavaMailSender mailSender;


    private final String fromEmail= "shivatejapspk@gmail.com";

    private static final String ADMIN_EMAIL = "shivateja252709@gmail.com";

    public MailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendEventNotification(EventData event) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom(fromEmail);
            helper.setTo(ADMIN_EMAIL);
            helper.setSubject("New Event Request: " + event.getEventName());

            String startUtc = formatDateTimeToUTC(event.getStartDate(), event.getStartTime());
            String endUtc = formatDateTimeToUTC(event.getEndDate(), event.getEndTime());

            String calendarUrl = generateGoogleCalendarLink(event, startUtc, endUtc);

            String emailContent = "<p>A new event request has been submitted.</p>" +
                    "<ul>" +
                    "<li><strong>Event Name:</strong> " + event.getEventName() + "</li>" +
                    "<li><strong>Host Name:</strong> " + event.getHostName() + "</li>" +
                    "<li><strong>Host Email:</strong> " + event.getHostEmail() + "</li>" +
                    "<li><strong>Location:</strong> " + event.getEventLocation() + "</li>" +
                    "<li><strong>Department:</strong> " + event.getDeptName() + "</li>" +
                    "<li><strong>Computer Assistance:</strong> " + event.getComputerAsst() + "</li>" +
                    "<li><strong>Event Type:</strong> " + event.getEventType() + "</li>" +
                    "<li><strong>Mics Needed:</strong> " + event.getMicsNeeded() + "</li>" +
                    "<li><strong>Record the Event:</strong> " + event.getRecording() + "</li>" +
                    "<li><strong>Wifi Access Needed:</strong> " + event.getWifiAccess() + "</li>" +
                    "<li><strong>Additional Information:</strong> " + event.getExtraInformation() + "</li>" +
                    "<li><strong>Start Date:</strong> " + event.getStartDate() + "</li>" +
                    "<li><strong>End Date:</strong> " + event.getEndDate() + "</li>" +
                    "<li><strong>Start Time:</strong> " + event.getStartTime() + "</li>" +
                    "<li><strong>End Time:</strong> " + event.getEndTime() + "</li>" +
                    "</ul>" +
                    "<p><a href='" + calendarUrl + "' target='_blank' " +
                    "style='display: inline-block; padding: 10px 15px; background-color: #007bff; " +
                    "color: white; text-decoration: none; font-weight: bold; border-radius: 5px;'>" +
                    "➕ Add to Google Calendar</a></p>" +
                    "<p>Please review and take necessary action.</p>";

            helper.setText(emailContent, true);

            mailSender.send(message);
            System.out.println("Email sent successfully to " + ADMIN_EMAIL);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
    private String formatDateTimeToUTC(LocalDateTime dateTime) {
        ZonedDateTime utcTime = dateTime.atZone(ZoneOffset.systemDefault()).withZoneSameInstant(ZoneOffset.UTC);
        return utcTime.format(DateTimeFormatter.ofPattern("yyyyMMdd'T'HHmmss'Z'"));
    }

    private String formatDateTimeToUTC(LocalDate date, LocalTime time) {
        LocalDateTime dateTime = LocalDateTime.of(date, time);
        return formatDateTimeToUTC(dateTime);
    }

    private String generateGoogleCalendarLink(EventData event, String startUtc, String endUtc) {
        String baseUrl = "https://calendar.google.com/calendar/r/eventedit?";
        return baseUrl +
                "text=" + encode(event.getEventName()) +
                "&dates=" + startUtc + "/" + endUtc +
                "&details=" + encode("Host: " + event.getHostName() + " (" + event.getHostEmail() + ")\n" +
                "Additional Info: " + event.getExtraInformation()) +
                "&location=" + encode(event.getEventLocation());
    }

    private String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }

}
