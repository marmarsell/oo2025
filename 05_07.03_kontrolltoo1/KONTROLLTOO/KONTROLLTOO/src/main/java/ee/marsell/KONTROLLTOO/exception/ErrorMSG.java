package ee.marsell.KONTROLLTOO.exception;

import lombok.Data;

import java.util.Date;

@Data

public class ErrorMSG {
    private String myComment;
    private String message;
    private Date timestamp;
    private int status;
}
