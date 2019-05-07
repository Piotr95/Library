package umcs.ta.Library.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import umcs.ta.Library.model.dto.converter.UserDtoConverter;
import umcs.ta.Library.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    private UserService userService;
    private UserDtoConverter userDtoConverter;


    @RequestMapping(path = "/register", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.CREATED)
    public void register(@RequestParam String username, @RequestParam String password) {
        userService.create(username, password);
    }
}
