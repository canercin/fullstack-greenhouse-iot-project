package dev.canercin.greenhouseiot.dto;

import lombok.Data;
import java.time.Year;

@Data
public class GreenhouseWeeklyAverageDTO {
    private Year year;
    private int week;
    private double avgHumidity;
    private double avgLight;
    private double avgSoilMoisture;
    private double avgTemperatureAsc;
    private double avgTemperatureAsf;
    private double avgWaterLevel;
}
