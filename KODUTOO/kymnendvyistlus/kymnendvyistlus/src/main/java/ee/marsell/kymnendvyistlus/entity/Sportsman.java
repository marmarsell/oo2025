package ee.marsell.kymnendvyistlus.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

@Getter
@Setter
@Entity

@NoArgsConstructor
@AllArgsConstructor

public class Sportsman {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String country;
    private int age;

}

/*

{
    "name": "Mars",
    "country": "Estonia",
    "age": 20
}

*/