package com.tts.weatherapp.weatherapp.service;

import com.tts.weatherapp.weatherapp.model.Response;
import com.tts.weatherapp.weatherapp.model.ZipCode;
import com.tts.weatherapp.weatherapp.repository.ZipRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {
    
    @Value("${api_key}")
    private String apiKey;

    @Autowired
    private ZipRepository zipRepository;

    public void save(ZipCode zipCode) {
        zipRepository.save(zipCode);
    }

    public Response getForecast(String zipCode) {
        String url = "http://api.openweathermap.org/data/2.5/weather?zip=" +
            zipCode + "&units=imperial&appid=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();
        try {
            ZipCode zip = new ZipCode(zipCode);
            zipRepository.save(zip);
            return restTemplate.getForObject(url, Response.class);
        } catch (HttpClientErrorException ex) {
            Response response = new Response();
            response.setName("error");
            return response;
        }
    }

}