package ee.marsell.kymnendvyistlus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ee.marsell.kymnendvyistlus.entity.Sportsman;

public interface SportsmanRepository extends JpaRepository<Sportsman, Long> {
}
