package ee.marsell.kymnendvyistlus.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@Getter
@Setter
@Entity

@NoArgsConstructor
@AllArgsConstructor

@CrossOrigin(origins = "http://localhost:5173")
@RestController

public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //values that are not given
    private Long id;
    private double totalPoints;

    @ManyToOne
    private Sportsman sportsman;

    //values that are given
    //running, measured in SECONDS
    private double run100m;
    private double run110mHurdles;
    private double run400m;
    private double run1500m;

    //throwing, measured in METRES
    private double discusThrow;
    private double javelinThrow;
    private double shotPut;

    //jumping, measured in CENTIMETRES
    private double highJump;
    private double longJump;
    private double poleVault;
}

/*

{
    "totalPoints": 0,
    "run100m": 10.827,
    "run110mHurdles": 14.59,
    "run400m": 48.19,
    "run1500m": 247.42,
    "discusThrow": 51.4,
    "javelinThrow": 70.67,
    "shotPut": 16.79,
    "highJump": 210,
    "longJump": 736,
    "poleVault": 496,
    "sportsman": {
        "id": 1
    }
}

*/