package ee.marsell.kymnendvyistlus.controller;

import ee.marsell.kymnendvyistlus.entity.Result;
import ee.marsell.kymnendvyistlus.repository.ResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

public class ResultController {

    @Autowired
    ResultRepository resultRepository;

    @GetMapping("results")
    public List<Result> getResults() { return resultRepository.findAll(); }

    @PostMapping("results")
    public List<Result> addResult(@RequestBody Result result) {
        if(result.getId() != null) {
            throw new RuntimeException("ERROR_ID_SHALLETH_CEASE_FROM_QUERY");
        }
        result.setTotalPoints(0);

        if(result.getRun100m() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getRun100m() == 0) {
            result.setRun100m(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 25.4347;
            double B = 18;
            double C = 1.81;
            double P = result.getRun100m();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(B - P, C) * A));
            result.setRun100m(Math.floor(Math.pow(B - P, C) * A));
        }

        if(result.getRun110mHurdles() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getRun110mHurdles() == 0) {
            result.setRun110mHurdles(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 5.74352;
            double B = 28.5;
            double C = 1.92;
            double P = result.getRun110mHurdles();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(B - P, C) * A));
            result.setRun110mHurdles(Math.floor(Math.pow(B - P, C) * A));
        }

        if(result.getRun400m() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getRun400m() == 0) {
            result.setRun400m(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 1.53775;
            double B = 82;
            double C = 1.81;
            double P = result.getRun400m();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(B - P, C) * A));
            result.setRun400m(Math.floor(Math.pow(B - P, C) * A));
        }

        if(result.getRun1500m() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getRun1500m() == 0) {
            result.setRun1500m(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 0.03768;
            double B = 480;
            double C = 1.85;
            double P = result.getRun1500m();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(B - P, C) * A));
            result.setRun1500m(Math.floor(Math.pow(B - P, C) * A));
        }

        if(result.getDiscusThrow() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getDiscusThrow() == 0) {
            result.setDiscusThrow(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 12.91;
            double B = 4;
            double C = 1.1;
            double P = result.getDiscusThrow();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(P - B, C) * A));
            result.setDiscusThrow(Math.floor(Math.pow(P - B, C) * A));
        }

        if(result.getHighJump() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getHighJump() == 0) {
            result.setHighJump(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 0.8465;
            double B = 75;
            double C = 1.42;
            double P = result.getHighJump();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(P - B, C) * A));
            result.setHighJump(Math.floor(Math.pow(P - B, C) * A));
        }

        if(result.getJavelinThrow() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getJavelinThrow() == 0) {
            result.setJavelinThrow(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 10.14;
            double B = 7;
            double C = 1.08;
            double P = result.getJavelinThrow();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(P - B, C) * A));
            result.setJavelinThrow(Math.floor(Math.pow(P - B, C) * A));
        }

        if(result.getLongJump() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getLongJump() == 0) {
            result.setLongJump(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 0.14354;
            double B = 220;
            double C = 1.4;
            double P = result.getLongJump();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(P - B, C) * A));
            result.setLongJump(Math.floor(Math.pow(P - B, C) * A));
        }

        if(result.getPoleVault() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getPoleVault() == 0) {
            result.setPoleVault(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 0.2797;
            double B = 100;
            double C = 1.35;
            double P = result.getPoleVault();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(P - B, C) * A));
            result.setPoleVault(Math.floor(Math.pow(P - B, C) * A));
        }

        if(result.getShotPut() < 0) {
            throw new RuntimeException("ERROR_POINTS_CANNOT_BE_THAT_BAD");
        }
        if(result.getShotPut() == 0) {
            result.setShotPut(-1);
        }
        else {
            //set numbers used for calculating points in every field. Made so for comfort purposes.
            double A = 51.39;
            double B = 1.5;
            double C = 1.05;
            double P = result.getShotPut();
            result.setTotalPoints(result.getTotalPoints() + Math.floor(Math.pow(P - B, C) * A));
            result.setShotPut(Math.floor(Math.pow(P - B, C) * A));
        }

        resultRepository.save(result);
        return resultRepository.findAll();
    }

    @DeleteMapping("results/{id}")
    public List<Result> deleteResult(@PathVariable Long id) {
        resultRepository.deleteById(id);
        return resultRepository.findAll();
    }
}
