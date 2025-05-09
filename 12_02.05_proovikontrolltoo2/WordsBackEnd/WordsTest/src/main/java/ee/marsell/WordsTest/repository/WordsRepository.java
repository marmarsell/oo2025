package ee.marsell.WordsTest.repository;

import ee.marsell.WordsTest.entity.Word;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordsRepository extends JpaRepository<Word, Long> {
}
