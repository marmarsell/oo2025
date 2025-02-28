package ee.Marsell.Libisev_keskmine.controller;

import ee.Marsell.Libisev_keskmine.entity.Value;
import ee.Marsell.Libisev_keskmine.repository.ValueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.transform.Result;
import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

@RestController

public class ValueController {
    @Autowired
    ValueRepository valueRepository;

//TODO: ////////////////////   VALUES   ////////////////////

    @GetMapping("values")
    public List<Value> getValues() { return valueRepository.findAll(); }

    @PostMapping("values")
    public List<Value> addValue(@RequestBody Value value) {
        if(value.getStoredNumber() < 0) {
            throw new RuntimeException("ERROR_NU_NEGATIVE_NUMBERS_PLS");
        }
        valueRepository.save(value);
        return valueRepository.findAll();
    }

    @DeleteMapping("values/{id}")
    public List<Value> deleteValue(@PathVariable Long id) {
        valueRepository.deleteById(id);
        return valueRepository.findAll();
    }

//TODO: ////////////////////    OTHER    ////////////////////

    @GetMapping("sum")
    public int findSum(@RequestBody Value value) {
        int sum = 0;
        List<Value> values = valueRepository.findAll();
        for(Value v: values) {
            sum = sum + v.getStoredNumber();
        }
        return sum;
    }

    @GetMapping("avg")
    public double findAvg(@RequestBody Value value) {
        int avgCounter = 0;
        double avg = -1;
        List<Value> values = valueRepository.findAll();
        for(Value v: values) {
            avgCounter = avgCounter + v.getStoredNumber();
        }
        avg = avgCounter / values.toArray().length;
        return avg;
    }

    @GetMapping("max")
    public int findMax(@RequestBody Value value) {
        int maxCounter = -1;
        List<Value> values = valueRepository.findAll();
        for(Value v: values) {
            if(v.getStoredNumber() > maxCounter) {
                maxCounter = v.getStoredNumber();
            }
        }
        return maxCounter;
    }

//TODO: ///////////////////   SLIPPY AVG   ///////////////////

    @GetMapping("slippy")
    public List generateSlipper() {
        List<Double> slipper = new ArrayList<>();
        double avgCounter = 0;
        double avg = -1;
        List<Value> values = valueRepository.findAll();
        for(int i = 0; i < values.toArray().length - 2; i++) {
            int j = 1;
            avgCounter = 0;
            while(j < 4) {
                avgCounter = avgCounter + values.get(i + j - 1).getStoredNumber();
                j = j + 1;
            }
            avg = avgCounter / 3;
            slipper.add(avg);
        }

        return slipper;
    }
}


