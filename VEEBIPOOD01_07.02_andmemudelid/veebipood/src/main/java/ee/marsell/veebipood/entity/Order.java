package ee.marsell.veebipood.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

// Hibernate
// automaatselt tekib andmebaasi tabel mis on klassi nimega

@Getter
@Setter
@Entity

@NoArgsConstructor
@AllArgsConstructor

@Table(name = "orders") // andmebaasis tuleb tabeli nimi "orders"
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date created;

    @ManyToOne // personil võib olla mitu tellimust
    private Person person; // IMPORTIDA

    @ManyToMany
    private List<Product> products; // IMPORTIDA

    private double totalSum;

    //@OneToMany
    //private List<Address> address;

}
