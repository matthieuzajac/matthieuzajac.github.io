---
title: "Autonomous Robotics: The Show Must Go On"
description: "Embedded software development and emergency system recovery for a multi-robot squad at the 2025 French Robotics Cup."
image: "/images/cdr.webp"
date: 2025
tags: ["C++", "Raspberry Pi", "STM32", "Lidar", "Embedded Systems"]
---

## Project Overview

I developed the control architecture for a multi-robot team competing in the 2025 French Robotics Cup. The system consisted of a primary robot focused on heavy-duty tasks and smaller, agile robots for rapid prop manipulation. The project required integrating diverse hardware platforms to navigate a dynamic stage and execute theatrical tasks autonomously.


## Key Features

* **Heterogeneous Architecture:** * **Primary Robot:** Utilized a **Raspberry Pi** for high-level logic and **Lidar** processing, interfaced with an **Arduino (ATmega)** for precise **stepper motor** control.
    * **Secondary Robots:** Powered by **STM32** microcontrollers, using **Time-of-Flight (ToF)** sensors for proximity detection and **360° servo motors** for continuous movement.
* **Navigation & Localization:** Developed a custom stack for Lidar-based SLAM on the Pi while implementing lightweight obstacle avoidance on the STM32 robots.
* **Task Automation:** Programmed complex state machines to coordinate the "theatrical" choreography required by the 2025 rules.

## Technical Challenges

The defining moment of the project was a catastrophic system failure upon arrival at the competition. Transport damage rendered the electronics and pre-written software non-functional. 

Under extreme pressure, I led a "Phoenix" recovery operation: 
1. **Hardware Salvage:** Re-soldered control boards and re-mapped IO pins on the fly.
2. **Software Refactoring:** Ported core logic from the damaged environment to a clean slate, re-calibrating the stepper motor steps and ToF sensor thresholds in the pits. 
3. **Emergency Homologation:** Successfully stabilized the communication between the Pi and Arduino just in time to pass technical inspection and compete.

> "The true test of engineering isn't how your robot performs in the lab, but how quickly you can rebuild it when everything fails in the pits."