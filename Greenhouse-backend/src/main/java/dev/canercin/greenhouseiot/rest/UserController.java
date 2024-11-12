package dev.canercin.greenhouseiot.rest;

import dev.canercin.greenhouseiot.entities.User;
import dev.canercin.greenhouseiot.service.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers(){
        return this.userService.findAll();
    }

    @DeleteMapping("{id}")
    public HttpStatus deleteUser(@PathVariable("id") String id){
        this.userService.deleteUser(id);
        return HttpStatus.OK;
    }
}
