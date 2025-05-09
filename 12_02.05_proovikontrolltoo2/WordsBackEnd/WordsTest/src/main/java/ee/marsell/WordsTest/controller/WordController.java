package ee.marsell.WordsTest.controller;

import ee.marsell.WordsTest.entity.Word;
import ee.marsell.WordsTest.repository.WordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

public class WordController {
    @Autowired
    WordsRepository wordsRepository;

    @GetMapping("words")
    public List<Word> getWords() { return wordsRepository.findAll(); }

    @PostMapping("words")
    public List<Word> addWord(@RequestBody Word word) {
        if(word.getId() != null) {
            throw new RuntimeException("REMOVE_ID_FROM_BODY");
        }
        if(word.getType() == null || word.getType() == "") {
            throw new RuntimeException("NO_WORD_IN_BODY");
        }
        if(word.getDescription() == null || word.getDescription() == "") {
            throw new RuntimeException("NO_DESCRIPTION_IN_BODY");
        }

        wordsRepository.save(word);
        return wordsRepository.findAll();
    }

    @DeleteMapping("words/{id}")
    public List<Word> deleteWord(@PathVariable Long id) {
        wordsRepository.deleteById(id);
        return wordsRepository.findAll();
    }
}
