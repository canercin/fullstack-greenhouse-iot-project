package dev.canercin.greenhouseiot.rest;

import dev.canercin.greenhouseiot.dto.JwtResponse;
import dev.canercin.greenhouseiot.dto.LoginRequest;
import dev.canercin.greenhouseiot.dto.SignupRequest;
import dev.canercin.greenhouseiot.entities.User;
import dev.canercin.greenhouseiot.service.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok(authService.login(loginRequest));
    }

    @PostMapping("/signup")
    public HttpStatus signup(@RequestBody SignupRequest signupRequest){
        User status = this.authService.signup(signupRequest);
        if (Objects.nonNull(status)){
            return HttpStatus.CREATED;
        }else {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
