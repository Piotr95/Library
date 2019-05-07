package umcs.ta.Library.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import umcs.ta.Library.infrastructure.exeptions.UserAlreadyExistsException;
import umcs.ta.Library.model.entity.User;
import umcs.ta.Library.repository.UserRepository;

@Service
public class UserService {
private UserRepository userRepository;
private PasswordEncoder passwordEncoder;
    @Autowired
    public UserService(UserRepository userRepository,PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder=passwordEncoder;
    }

    public User create(String username, String password) {
        if (userRepository.existsByUsername(username))
            throw new UserAlreadyExistsException();

        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setAdmin(false);
        return userRepository.save(user);
    }
}
