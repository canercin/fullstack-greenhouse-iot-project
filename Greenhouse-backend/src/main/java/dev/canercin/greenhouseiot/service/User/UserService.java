package dev.canercin.greenhouseiot.service.User;

import dev.canercin.greenhouseiot.entities.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;
import java.util.Optional;

public interface UserService {
    void save(User user);
    List<User> findAll();
    User findByUsername(String username);
    UserDetailsService userDetailsService();
    void deleteUser(String id);
}