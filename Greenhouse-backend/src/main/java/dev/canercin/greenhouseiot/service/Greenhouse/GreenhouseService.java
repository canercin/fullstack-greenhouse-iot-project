package dev.canercin.greenhouseiot.service.Greenhouse;

import dev.canercin.greenhouseiot.dto.GreenhouseDailyAverageDTO;
import dev.canercin.greenhouseiot.dto.GreenhouseMonthlyAverageDTO;
import dev.canercin.greenhouseiot.dto.GreenhouseWeeklyAverageDTO;
import dev.canercin.greenhouseiot.entities.Greenhouse;

import java.time.LocalDate;
import java.time.YearMonth;
import java.util.Date;
import java.util.List;

public interface GreenhouseService {
    void save(Greenhouse greenhouse);
    List<Greenhouse> findAll();
    List<Greenhouse> findTop10ByOrderByStateTimeAsc();
    Greenhouse findTopByOrderByStateTimeAsc();
    List<GreenhouseDailyAverageDTO> getDailyAverages(java.sql.Date dateParam);
    List<GreenhouseWeeklyAverageDTO> getWeeklyAverages(java.sql.Date dateParam);
    List<GreenhouseMonthlyAverageDTO> getMonthlyAverages(int yearParam, int monthParam);
}
