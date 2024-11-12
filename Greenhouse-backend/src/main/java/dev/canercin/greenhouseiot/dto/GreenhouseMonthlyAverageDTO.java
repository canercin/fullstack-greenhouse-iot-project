package dev.canercin.greenhouseiot.dto;

import lombok.Data;
import java.time.YearMonth;

@Data
public class GreenhouseMonthlyAverageDTO {
    private YearMonth yearMonth;
    private double avgHumidity;
    private double avgLight;
    private double avgSoilMoisture;
    private double avgTemperatureAsc;
    private double avgTemperatureAsf;
    private double avgWaterLevel;
}
