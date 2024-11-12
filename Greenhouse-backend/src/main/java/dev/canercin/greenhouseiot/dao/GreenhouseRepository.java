package dev.canercin.greenhouseiot.dao;

import dev.canercin.greenhouseiot.entities.Greenhouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface GreenhouseRepository extends JpaRepository<Greenhouse, Long>{
    List<Greenhouse> findTop10ByOrderByStateTimeDesc();
    Greenhouse findTopByOrderByStateTimeDesc();
}
