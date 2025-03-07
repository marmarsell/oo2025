package ee.marsell.KONTROLLTOO.controller;

import ee.marsell.KONTROLLTOO.entity.Word;
import ee.marsell.KONTROLLTOO.entity.WordCounter;
import ee.marsell.KONTROLLTOO.repository.WordCounterRepo;
import ee.marsell.KONTROLLTOO.repository.WordRepository;
import org.hibernate.Length;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@RestController

public class WordController {
    @Autowired
    WordRepository wordRepository;
    @Autowired
    WordCounterRepo wordCounterRepo;

//TODO ///////////////////////////     [ TASK 1 ]     ///////////////////////////

    @GetMapping("kontrolltoo/api/words")
    public List<Word> getWords() { return wordRepository.findAll(); }

    @PostMapping("kontrolltoo/api/words")
    public List<Word> addWord(@RequestBody Word word) {

        if(word.getStoredString() == null || word.getStoredString() == "") {
            throw new RuntimeException("ERROR_BRO_FORGOT_TO_SEND_WORD");
        }
        if(word.getStoredString().length() > 26) {
            throw new RuntimeException("ERROR_THAT_IS_TOO_LONG_OF_A_WORD_EH");
        }
        if(word.getId() != null) {
            throw new RuntimeException("ERROR_THY_SHALLETH_CEASE_SENDING_IDS");
        }

        List Alphabet = new ArrayList<>();
        Alphabet.add("A");
        Alphabet.add("B");
        Alphabet.add("C");
        Alphabet.add("D");
        Alphabet.add("E");
        Alphabet.add("F");
        Alphabet.add("G");
        Alphabet.add("H");
        Alphabet.add("I");
        Alphabet.add("J");
        Alphabet.add("K");
        Alphabet.add("L");
        Alphabet.add("M");
        Alphabet.add("N");
        Alphabet.add("O");
        Alphabet.add("P");
        Alphabet.add("Q");
        Alphabet.add("R");
        Alphabet.add("S");
        Alphabet.add("T");
        Alphabet.add("U");
        Alphabet.add("V");
        Alphabet.add("W");
        Alphabet.add("X");
        Alphabet.add("Y");
        Alphabet.add("Z");
        word.setStoredString(Alphabet.toArray()[word.getStoredString().length() - 1] + word.getStoredString());
        wordRepository.save(word);
        return wordRepository.findAll();
    }

    @DeleteMapping("kontrolltoo/api/words/delete{id}")
    public List<Word> deleteWord(@PathVariable Long id) {
        wordRepository.deleteById(id);
        return wordRepository.findAll();
    }

//TODO ///////////////////////////     [ TASK 2 ]     ///////////////////////////

    @GetMapping("kontrolltoo/api/threeChar")
    public List countByLength() {
        List returner = new ArrayList<>();
        List<Word> threeChars = new ArrayList<>();
        List<Word> allWords = wordRepository.findAll();
        int threeWordCounter = 0;
        for(Word entry: allWords) {
            if(entry.getStoredString().length() == 3) {
                threeWordCounter = threeWordCounter + 1;
                threeChars.add(entry);
            }
        }
        WordCounter counterEntry = new WordCounter();
        counterEntry.setWordCount(threeWordCounter);
        wordCounterRepo.save(counterEntry);
        String counterReturn = "total number: " + threeWordCounter;
        returner.add(counterReturn);
        returner.add(threeChars);
        return returner;
    }

    @GetMapping("kontrolltoo/api/divByThree")
    public List divideByThree() {
        List returner = new ArrayList<>();
        List<Word> threeChars = new ArrayList<>();
        List<Word> allWords = wordRepository.findAll();
        int threeWordCounter = 0;
        for(Word entry: allWords) {
            if(entry.getStoredString().length() % 3 == 0) {
                threeWordCounter = threeWordCounter + 1;
                threeChars.add(entry);
            }
        }
        String counterReturn = "total number: " + threeWordCounter;
        returner.add(counterReturn);
        returner.add(threeChars);
        return returner;
    }

    @GetMapping("kontrolltoo/api/algarv")
    public List numberator() {
        List returner = new ArrayList<>();
        List<Word> threeChars = new ArrayList<>();
        List<Word> allWords = wordRepository.findAll();
        int numCounter = 0;
        for(Word entry: allWords) {
            if(entry.getStoredString().length() == 2 || entry.getStoredString().length() == 3
                || entry.getStoredString().length() == 5 || entry.getStoredString().length() == 7
                    || entry.getStoredString().length() == 11 || entry.getStoredString().length() == 13
                        || entry.getStoredString().length() == 17 || entry.getStoredString().length() == 19
                            || entry.getStoredString().length() == 23 || entry.getStoredString().length() == 29) {

                numCounter = numCounter + 1;
                threeChars.add(entry);

            }
        }
        String counterReturn = "total number: " + numCounter;
        returner.add(counterReturn);
        returner.add(threeChars);
        return returner;
    }
}
