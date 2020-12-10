package com.example.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	private static final int ONE_DAY = 60 * 60 * 24;

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// Static Resources 중 기본 Classpath에 존재하지 않는 경우 (ex. 공유스토리지)
		registry.addResourceHandler("/static/**")
			.addResourceLocations("classpath:/assets/static/")
			.setCachePeriod(ONE_DAY);
		registry.addResourceHandler("/assets/**")
			.addResourceLocations("classpath:/assets/")
			.setCachePeriod(ONE_DAY);
	}
}
