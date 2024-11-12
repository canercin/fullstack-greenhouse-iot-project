package dev.canercin.greenhouseiot.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String password;
    private String email;
    private String role;
}
