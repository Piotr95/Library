package umcs.ta.Library.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/api/welcome")
    public String welcome(){
        return "Welcome in dark world of Angular and Spring";
    }


}
