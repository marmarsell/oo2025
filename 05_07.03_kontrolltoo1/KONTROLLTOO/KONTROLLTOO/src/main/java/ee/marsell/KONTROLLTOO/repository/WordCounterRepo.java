package ee.marsell.KONTROLLTOO.repository;

import ee.marsell.KONTROLLTOO.entity.WordCounter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WordCounterRepo extends JpaRepository<WordCounter, Long> {
}
