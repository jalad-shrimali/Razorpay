package com.cosmostaker.razorpay_integration.config;

import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RazorpayConfig {

    private static final Logger logger = LoggerFactory.getLogger(RazorpayConfig.class);

    private String keyId="rzp_test_HF2lHcvkbTMVX6";


    private String secretKey="0OINr5QTEOqcB65Km9zSUdT2";

    @Bean
    public RazorpayClient razorpayClient() throws RazorpayException {
        logger.info("Initializing RazorpayClient with keyId: {}", keyId);
        return new RazorpayClient(this.keyId, this.secretKey);
    }
}