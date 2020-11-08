package com.navercorp.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {
	@RequestMapping({"/", "/test/test"})
	public String web() {
		return "index";
	}
}
