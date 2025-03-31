package com.aishowcase.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    
    @GetMapping("/")
    public String home() {
        return "index";
    }
    
    @GetMapping("/about")
    public String about() {
        return "about";
    }
    
    @GetMapping("/team")
    public String team() {
        return "team";
    }
    
    @GetMapping("/mvp")
    public String mvp() {
        return "mvp";
    }
    
    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }
} 