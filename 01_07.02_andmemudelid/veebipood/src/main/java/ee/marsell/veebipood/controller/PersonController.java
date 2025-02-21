package ee.marsell.veebipood.controller;

import ee.marsell.veebipood.entity.Person;
import ee.marsell.veebipood.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // annab api võimalusi

public class PersonController {

    @Autowired
    PersonRepository personRepository;

    // front end peab sisestama id ja parooli
    // awa awa TODO: peab saatma emaili ja parooli. Muid välju ei küsi, tagastada normaalne mudel front endile
    @PostMapping("login")
    public boolean login(@RequestBody Person person) {
        if(person.getId() == null) {
            throw new RuntimeException("ERROR_EMAIL_MISSING");
        }
        if(person.getPassword() == null || person.getPassword().isBlank()) {
            throw new RuntimeException("ERROR_PASSWORD_MISSING");
        }
        Person dbPerson = personRepository.findById(person.getId()).orElseThrow();
        if(dbPerson.getPassword() == null || person.getPassword().isBlank()) {
            return true;
        }
        else {
            return false;
        }
    }

    // TODO: Ei tagasta listi
    @PostMapping("signup")
    public List<Person> signup(@RequestBody Person person) {
        if(person.getEmail() == null || person.getEmail().isBlank()) {
            throw new RuntimeException("ERROR_EMAIL_MISSING");
        }
        if(person.getPassword() == null || person.getPassword().isBlank()) {
            throw new RuntimeException("ERROR_PASSWORD_MISSING");
        }
        personRepository.save(person);
        return personRepository.findAll();
    }
}
