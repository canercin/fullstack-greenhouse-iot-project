package dev.canercin.greenhouseiot.dto;

import lombok.Data;

import java.sql.Date;

@Data
public class GreenhouseDailyAverageDTO {
    private Date date;
    private double avgHumidity;
    private double avgLight;
    private double avgSoilMoisture;
    private double avgTemperatureAsc;
    private double avgTemperatureAsf;
    private double avgWaterLevel;
}
