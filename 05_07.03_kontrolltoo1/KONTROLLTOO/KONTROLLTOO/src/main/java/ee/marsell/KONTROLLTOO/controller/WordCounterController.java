package ee.marsell.KONTROLLTOO.controller;

import ee.marsell.KONTROLLTOO.entity.Word;
import ee.marsell.KONTROLLTOO.entity.WordCounter;
import ee.marsell.KONTROLLTOO.repository.WordCounterRepo;
import ee.marsell.KONTROLLTOO.repository.WordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class WordCounterController {
    @Autowired
    WordCounterRepo wordCounterRepo;
    WordRepository wordRepository;

//TODO ///////////////////////////     [ TASK 3 ]     ///////////////////////////

    @GetMapping("kontrolltoo/api/wordsCounter")
    public List<WordCounter> getCountedWords() { return wordCounterRepo.findAll(); }
}
