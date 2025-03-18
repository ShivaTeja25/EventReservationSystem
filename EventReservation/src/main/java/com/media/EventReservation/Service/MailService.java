package com.media.EventReservation.Service;
import com.media.EventReservation.Model.EventData;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.MessagingException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

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
            helper.setText(
                    "A new event request has been submitted.\n\n" +
                            "Event Name: " + event.getEventName() + "\n" +
                            "Host Name: " + event.getHostName() + "\n" +
                            "Host Email: " + event.getHostEmail() + "\n" +
                            "Location: " + event.getEventLocation() + "\n" +
                            "Department: " + event.getDeptName() + "\n" +
                            "Mics Needed: " + event.getMicsNeeded() + "\n" +
                            "Recording: " + event.getRecording() + "\n" +
                            "Event Type: " + event.getEventType() + "\n" +
                            "Computer Assistance: " + event.getComputerAsst() + "\n" +
                            "Conference Tool: " + event.getConferenceTool() + "\n" +
                            "WiFi Access: " + event.getWifiAccess() + "\n" +
                            "Extra Information: " + event.getExtraInformation() + "\n\n" +
                            "Start Date: " + event.getStartDate() + "\n" +
                            "Start Time: " + event.getStartTime() + "\n" +
                            "End Date: " + event.getEndDate() + "\n" +
                            "End Time: " + event.getEndTime() + "\n" +
                            "Please review and take necessary action.", false
            );

            mailSender.send(message);
            System.out.println("Email sent successfully to " + ADMIN_EMAIL);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }


}
