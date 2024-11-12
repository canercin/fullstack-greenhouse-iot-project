package dev.canercin.greenhouseiot.rest;

import dev.canercin.greenhouseiot.dto.GreenhouseDailyAverageDTO;
import dev.canercin.greenhouseiot.dto.GreenhouseMonthlyAverageDTO;
import dev.canercin.greenhouseiot.dto.GreenhouseWeeklyAverageDTO;
import dev.canercin.greenhouseiot.entities.Greenhouse;
import dev.canercin.greenhouseiot.service.Greenhouse.GreenhouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/greenhouse")
public class GreenhouseController {
    private GreenhouseService greenHouseService;

   @Autowired
    public GreenhouseController(GreenhouseService greenHouseService) {
        this.greenHouseService = greenHouseService;
    }

    /**
     * @param greenhouse Veri tabanına kaydedilecek sera verisi
     * @return Kaydedilen verinin HTTP 200 durum kodu ile dönüşü
     * @apiNote id ve state_time alanları otomatik olarak eklenir.
     * @exampleRequest {
     *       "ambient_humidity": 65.2,
     *       "amount_of_light": 800.5,
     *       "operation_type": 1,
     *       "soil_moisture": 45.7,
     *       "ambient_temperature_asc": 25.6,
     *       "ambient_temperature_asf": 78.1,
     *       "water_level": 75.3
     * @apiNote id ve stateTime alanları otomatik olarak eklenir.
     * @exampleRequest {
     *       "humidity": 65.2,
     *       "lightAmount": 800.5,
     *       "operationType": 1,
     *       "soilMoisture": 45.7,
     *       "temperatureAsC": 25.6,
     *       "temperatureAsF": 78.1,
     *       "waterLevel": 75.3
     *     }
     */
    @PostMapping("/save")
    public ResponseEntity<String> saveGreenHouseData(@RequestBody Greenhouse greenhouse) {
       this.greenHouseService.save(greenhouse);
       return new ResponseEntity<>(greenhouse.toString(), HttpStatus.OK);
    }

    /**
     * @return Tüm sera verilerini döndürür
     * @exampleResponse {
     *         "id": 4,
     *         "stateTime": "2024-03-25T19:56:28.617891",
     *         "lightAmount": 0.0,
     *         "temperatureAsC": 0.0,
     *         "temperatureAsF": 0.0,
     *         "humidity": 0.0,
     *         "waterLevel": 0.0,
     *         "soilMoisture": 0.0,
     *         "operationType": 0
     *     }
     */
    @GetMapping("/get")
    public List<Greenhouse> getGreenHouseData() {
        return this.greenHouseService.findAll();
    }

    @GetMapping("/getLast10Record")
    public List<Greenhouse> getTop10GreenHouseData() {
        return this.greenHouseService.findTop10ByOrderByStateTimeAsc();
    }

    @GetMapping("/getLastRecord")
    public Greenhouse getLastGreenHouseData() {
        return this.greenHouseService.findTopByOrderByStateTimeAsc();
    }

    @GetMapping("/daily-averages")
    public ResponseEntity<List<GreenhouseDailyAverageDTO>> getDailyAverages(@RequestParam("date") String data) {
        java.sql.Date date = java.sql.Date.valueOf(LocalDate.parse(data));
        List<GreenhouseDailyAverageDTO> averages = greenHouseService.getDailyAverages(date);
        return new ResponseEntity<>(averages, HttpStatus.OK);
    }

    @GetMapping("/weekly-averages")
    public ResponseEntity<List<GreenhouseWeeklyAverageDTO>> getWeeklyAverages(@RequestParam("date") String data) {
        java.sql.Date date = java.sql.Date.valueOf(LocalDate.parse(data));
        List<GreenhouseWeeklyAverageDTO> averages = greenHouseService.getWeeklyAverages(date);
        return new ResponseEntity<>(averages, HttpStatus.OK);
    }

    @GetMapping("/monthly-averages")
    public ResponseEntity<List<GreenhouseMonthlyAverageDTO>> getMonthlyAverages(@RequestParam("year") int year, @RequestParam("month") int month) {
        List<GreenhouseMonthlyAverageDTO> averages = greenHouseService.getMonthlyAverages(year, month);
        return new ResponseEntity<>(averages, HttpStatus.OK);
    }
}