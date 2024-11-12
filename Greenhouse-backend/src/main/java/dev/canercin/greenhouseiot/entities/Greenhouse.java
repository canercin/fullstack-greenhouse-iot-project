package dev.canercin.greenhouseiot.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "greenhouse")
public class Greenhouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "state_time")
    private LocalDateTime stateTime;

    @Column(name = "amount_of_light")
    private float lightAmount;

    @Column(name = "ambient_temperature_asC")
    private float temperatureAsC;

    @Column(name = "ambient_temperature_asF")
    private float temperatureAsF;

    @Column(name = "ambient_humidity")
    private float humidity;

    @Column(name = "water_level")
    private float waterLevel;

    @Column(name = "soil_moisture")
    private float soilMoisture;

    @Column(name ="operation_type")
    private int operationType;

    public Greenhouse() {
    }

    public Greenhouse(int id, float lightAmount, float temperatureAsC, float temperatureAsF, float humidity, float waterLevel, float soilMoisture, int operationType) {
        this.id = id;
        this.lightAmount = lightAmount;
        this.temperatureAsC = temperatureAsC;
        this.temperatureAsF = temperatureAsF;
        this.humidity = humidity;
        this.waterLevel = waterLevel;
        this.soilMoisture = soilMoisture;
        this.operationType = operationType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDateTime getStateTime() {
        return stateTime;
    }

    public void setStateTime(LocalDateTime stateTime) {
        this.stateTime = stateTime;
    }

    public float getLightAmount() {
        return lightAmount;
    }

    public void setLightAmount(float lightAmount) {
        this.lightAmount = lightAmount;
    }

    public float getTemperatureAsC() {
        return temperatureAsC;
    }

    public void setTemperatureAsC(float temperatureAsC) {
        this.temperatureAsC = temperatureAsC;
    }

    public float getTemperatureAsF() {
        return temperatureAsF;
    }

    public void setTemperatureAsF(float temperatureAsF) {
        this.temperatureAsF = temperatureAsF;
    }

    public float getHumidity() {
        return humidity;
    }

    public void setHumidity(float humidity) {
        this.humidity = humidity;
    }

    public float getWaterLevel() {
        return waterLevel;
    }

    public void setWaterLevel(float waterLevel) {
        this.waterLevel = waterLevel;
    }

    public float getSoilMoisture() {
        return soilMoisture;
    }

    public void setSoilMoisture(float soilMoisture) {
        this.soilMoisture = soilMoisture;
    }

    public int getOperationType() {
        return operationType;
    }

    public void setOperationType(int operationType) {
        this.operationType = operationType;
    }

    @Override
    public String toString() {
        return "Greenhouse{" +
                "id=" + id +
                ", stateTime=" + stateTime +
                ", lightAmount=" + lightAmount +
                ", temperatureAsC=" + temperatureAsC +
                ", temperatureAsF=" + temperatureAsF +
                ", humidity=" + humidity +
                ", waterLevel=" + waterLevel +
                ", soilMoisture=" + soilMoisture +
                ", operationType=" + operationType +
                '}';
    }
}
