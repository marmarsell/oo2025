package ee.marsell.KONTROLLTOO.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice

public class ExceptionYoinker {
    @ExceptionHandler
    public ResponseEntity<ErrorMSG> handleException(RuntimeException e) {
        ErrorMSG error = new ErrorMSG();
        error.setMyComment("Bro did something really wrong there lmao");
        error.setMessage(e.getMessage());
        error.setTimestamp(new Date());
        error.setStatus(400);
        return ResponseEntity.badRequest().body(error);
    }
}
