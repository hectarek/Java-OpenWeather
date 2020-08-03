package com.tts.weatherapp.weatherapp.repository;

import com.tts.weatherapp.weatherapp.model.ZipCode;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ZipRepository extends JpaRepository<ZipCode, Long> {
    
}