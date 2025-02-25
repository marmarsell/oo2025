package ee.marsell.kymnendvyistlus.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity

@NoArgsConstructor
@AllArgsConstructor

public class Result {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //values that are not given
    private Long id;
    private double totalPoints;

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
    "run100m": 20,
    "run110mHurdles": 20,
    "run400m": 20,
    "run1500m": 20,

    "discusThrow": 20,
    "javelinThrow": 20,
    "shotPut": 20,

    "highJump": 20,
    "longJump": 20,
    "poleVault": 20,

    "category": {
    "id": 4
    }
}

*/