package ee.marsell.kymnendvyistlus.controller;

import ee.marsell.kymnendvyistlus.entity.Sportsman;
import ee.marsell.kymnendvyistlus.repository.SportsmanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

public class SportsmanController {
    @Autowired
    SportsmanRepository sportsmanRepository;

    @GetMapping("humans")
    public List<Sportsman> getSportsmen() { return sportsmanRepository.findAll(); }

    @PostMapping("humans")
    public List<Sportsman> addSportsman(@RequestBody Sportsman sportsman) {
        if(sportsman.getId() != null) {
            throw new RuntimeException("ERROR_ID_SHALLETH_CEASE_FROM_QUERY");
        }
        if(sportsman.getAge() < 1) {
            throw new RuntimeException("ERROR_PERSON_NOT_YET_ABLE_TO_STAND_ON_THEIR_OWN");
        }
        sportsmanRepository.save(sportsman);
        return sportsmanRepository.findAll();
    }

    @DeleteMapping("humans/{id}")
    public List<Sportsman> deleteSportsman(@PathVariable Long id) {
        sportsmanRepository.deleteById(id);
        return sportsmanRepository.findAll();
    }
}
