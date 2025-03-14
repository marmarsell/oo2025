package ee.marsell.veebipood.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// Hibernate
// automaatselt tekib andmebaasi tabel mis on klassi nimega

@Getter
@Setter
@Entity

@NoArgsConstructor
@AllArgsConstructor

public class Person { // ERROR: syntax error near "user" --> andmebaasis reserveeritud
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
