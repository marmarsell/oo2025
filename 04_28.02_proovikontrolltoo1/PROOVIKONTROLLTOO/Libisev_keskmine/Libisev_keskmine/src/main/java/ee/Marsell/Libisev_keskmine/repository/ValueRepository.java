package ee.Marsell.Libisev_keskmine.repository;

import ee.Marsell.Libisev_keskmine.entity.Value;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ValueRepository extends JpaRepository<Value, Long> {
}
