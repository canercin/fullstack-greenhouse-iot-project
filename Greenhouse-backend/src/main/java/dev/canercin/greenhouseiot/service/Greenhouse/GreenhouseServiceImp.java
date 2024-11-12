package dev.canercin.greenhouseiot.service.Greenhouse;

import dev.canercin.greenhouseiot.dao.GreenhouseRepository;
import dev.canercin.greenhouseiot.dto.GreenhouseDailyAverageDTO;
import dev.canercin.greenhouseiot.dto.GreenhouseMonthlyAverageDTO;
import dev.canercin.greenhouseiot.dto.GreenhouseWeeklyAverageDTO;
import dev.canercin.greenhouseiot.entities.Greenhouse;
import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.StoredProcedureQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.Year;
import java.time.YearMonth;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GreenhouseServiceImp implements GreenhouseService {

    private GreenhouseRepository greenhouseRepository;
    private EntityManager entityManager;

    @Autowired
    public GreenhouseServiceImp(GreenhouseRepository greenHouse, EntityManager entityManager) {
        this.greenhouseRepository = greenHouse;
        this.entityManager = entityManager;
    }

    @Override
    public void save(Greenhouse greenhouse) {
        greenhouse.setStateTime(LocalDateTime.now());
        this.greenhouseRepository.save(greenhouse);
    }

    @Override
    public List<Greenhouse> findAll() {
        return this.greenhouseRepository.findAll();
    }

    @Override
    public List<Greenhouse> findTop10ByOrderByStateTimeAsc() {
        return this.greenhouseRepository.findTop10ByOrderByStateTimeDesc();
    }

    @Override
    public Greenhouse findTopByOrderByStateTimeAsc() {
        return this.greenhouseRepository.findTopByOrderByStateTimeDesc();
    }

    @Override
    public List<GreenhouseDailyAverageDTO> getDailyAverages(Date dateParam) {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("GetDailyAverages");
        query.registerStoredProcedureParameter("date_param", Date.class, ParameterMode.IN);
        query.setParameter("date_param", dateParam);
        List<Object[]> results = query.getResultList();

        return results.stream().map(this::mapToDailyAverageDTO).collect(Collectors.toList());
    }

    private GreenhouseDailyAverageDTO mapToDailyAverageDTO(Object[] tuple) {
        GreenhouseDailyAverageDTO dto = new GreenhouseDailyAverageDTO();
        dto.setDate((Date) tuple[0]);
        dto.setAvgHumidity((Double) tuple[1]);
        dto.setAvgLight((Double) tuple[2]);
        dto.setAvgSoilMoisture((Double) tuple[3]);
        dto.setAvgTemperatureAsc((Double) tuple[4]);
        dto.setAvgTemperatureAsf((Double) tuple[5]);
        dto.setAvgWaterLevel((Double) tuple[6]);
        return dto;
    }

    @Override
    public List<GreenhouseWeeklyAverageDTO> getWeeklyAverages(Date dateParam) {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("GetWeeklyAverages");
        query.registerStoredProcedureParameter("date_param", Date.class, ParameterMode.IN);
        query.setParameter("date_param", dateParam);
        List<Object[]> results= query.getResultList();

        return results.stream().map(this::mapToWeeklyAverageDTO).collect(Collectors.toList());
    }

    private GreenhouseWeeklyAverageDTO mapToWeeklyAverageDTO(Object[] tuple) {
        GreenhouseWeeklyAverageDTO dto = new GreenhouseWeeklyAverageDTO();
        dto.setYear(Year.of((Integer) tuple[0]));
        dto.setWeek((Integer) tuple[1]);
        dto.setAvgHumidity((Double) tuple[2]);
        dto.setAvgLight((Double) tuple[3]);
        dto.setAvgSoilMoisture((Double) tuple[4]);
        dto.setAvgTemperatureAsc((Double) tuple[5]);
        dto.setAvgTemperatureAsf((Double) tuple[6]);
        dto.setAvgWaterLevel((Double) tuple[7]);
        return dto;
    }

    @Override
    public List<GreenhouseMonthlyAverageDTO> getMonthlyAverages(int yearParam, int monthParam) {
        StoredProcedureQuery query = entityManager.createStoredProcedureQuery("GetMonthlyAverages");
        query.registerStoredProcedureParameter("year_param", Integer.class, ParameterMode.IN);
        query.registerStoredProcedureParameter("month_param", Integer.class, ParameterMode.IN);
        query.setParameter("year_param", yearParam);
        query.setParameter("month_param", monthParam);
        List<Object[]> results = query.getResultList();

        return results.stream().map(this::mapToMonthlyAverageDTO).collect(Collectors.toList());
    }

    private GreenhouseMonthlyAverageDTO mapToMonthlyAverageDTO(Object[] tuple) {
        GreenhouseMonthlyAverageDTO dto = new GreenhouseMonthlyAverageDTO();
        dto.setYearMonth(YearMonth.of(Integer.parseInt(tuple[0].toString()), Integer.parseInt(tuple[1].toString())));
        dto.setAvgHumidity((Double) tuple[2]);
        dto.setAvgLight((Double) tuple[3]);
        dto.setAvgSoilMoisture((Double) tuple[4]);
        dto.setAvgTemperatureAsc((Double) tuple[5]);
        dto.setAvgTemperatureAsf((Double) tuple[6]);
        dto.setAvgWaterLevel((Double) tuple[7]);
        return dto;
    }
}
