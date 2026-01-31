---
title: "Capacitive Drum Prototype"
description: "A mixed-signal engineering project combining physical simulations, custom PCB design, and embedded signal processing."
image: "/images/Assemblage.webp"
date: 2025
tags: ["STM32", "COMSOL", "KiCad/PCB", "Signal Processing", "C++"]
---

## Project Overview

This project explored the intersection of physics and electronics. I designed a touch-sensitive capacitive drum that uses changes in electrostatic fields to trigger high-fidelity audio signals.

## Key Features

* **Multiphysics Simulation:** Used COMSOL to model the electrode sensitivity and optimize the sensor layout.
* **Embedded Processing:** Implemented on an STM32 microcontroller using DSP algorithms to filter noise and detect hit velocity.
* **Custom Hardware:** Designed the analog front-end and signal conditioning circuits on a custom PCB.

## Technical Challenges

The biggest hurdle was the Signal-to-Noise Ratio (SNR). Capacitive sensors are highly sensitive to environmental interference. I solved this by implementing a digital low-pass filter and designing a ground plane on the PCB to shield the sensing traces.

> "From COMSOL simulations to a physical board, this project required a full-stack engineering approach to solve real-world hardware noise issues."