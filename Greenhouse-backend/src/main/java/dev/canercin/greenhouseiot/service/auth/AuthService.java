package dev.canercin.greenhouseiot.service.auth;

import dev.canercin.greenhouseiot.dto.JwtResponse;
import dev.canercin.greenhouseiot.dto.LoginRequest;
import dev.canercin.greenhouseiot.dto.SignupRequest;
import dev.canercin.greenhouseiot.entities.User;

public interface AuthService {
    User signup(SignupRequest signupRequest);
    JwtResponse login(LoginRequest loginRequest);
}
