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

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // int
    private String name;
    private double price;
    private String image;
    private boolean active;

    // @ManyToMany / @ManyToOne / @OneToMany / @OneToOne

    @ManyToOne
    private Category category;
}
