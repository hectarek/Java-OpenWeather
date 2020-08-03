package com.tts.weatherapp.weatherapp.controller;

import com.tts.weatherapp.weatherapp.model.Request;
import com.tts.weatherapp.weatherapp.model.Response;
import com.tts.weatherapp.weatherapp.service.WeatherService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WeatherController {
    
    @Autowired
	private WeatherService weatherService; 
	
	@GetMapping
	public String getIndex(Model model) {
		model.addAttribute("request", new Request()); 
		return "index"; 
	}
	
	@PostMapping
	public String PostIndex(Request request, Model model) {
		Response data = weatherService.getForecast(request.getZipCode()); 
		model.addAttribute("data", data); 
		return "index"; 
	}

}