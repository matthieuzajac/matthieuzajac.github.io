---
title: "LoRaWAN IoT Monitoring System"
description: "An autonomous environmental sensing node for 3D printing filament storage using TTN and Datacake."
image: "/images/lora.webp"
date: 2026
tags: ["LoRaWAN", "STM32", "BME680", "TTN", "Datacake", "Low Power"]
---

## Project Overview

3D printing filament quality is highly sensitive to ambient humidity. I engineered a dedicated IoT sensor node to monitor storage conditions over long distances and extended periods using LoRa technology.



## Key Features

* **BME680 Environmental Sensor:** High-precision measurement of temperature, humidity, and atmospheric pressure.
* **Long-Range Connectivity:** Implementation of the LoRaWAN protocol via **The Things Network (TTN)** for robust transmission through structural obstacles.
* **Cloud Dashboard:** Seamless integration with **Datacake** for real-time data visualization, historical logging, and automated alert notifications.
* **Power Management:** Powered by a rechargeable Li-ion battery with an integrated charging circuit and optimized firmware for ultra-low power consumption.

## Technical Challenges

The primary engineering hurdle was power optimization. To ensure the module could remain autonomous for several months, I implemented deep-sleep modes, reducing standby current to the micro-ampere range. I also developed a custom **JavaScript Payload Formatter** on the TTN console to perform bit-packing, significantly reducing the uplink packet size and minimizing LoRa "Airtime" to comply with legal duty cycles.

> "This project demonstrates the successful bridge between physical hardware sensing and industrial-grade cloud data management."