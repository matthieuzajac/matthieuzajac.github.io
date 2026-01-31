---
title: "Multi-Modal Ball Positioning System"
description: "A hybrid tracking system combining UWB trilateration, mechanical modeling, and computer vision for impartial sports officiating."
image: "/images/Position.webp"
date: 2023
tags: ["UWB", "Python", "OpenCV", "Arduino", "Signal Processing", "Mechanics"]
---

## Project Overview

The objective of this study was to design a high-precision system to determine the exact landing position of a ball. I developed a multi-modal approach combining wireless trilateration, mechanical trajectory modeling, and automated video analysis to ensure impartial arbitration.



## Key Features

* **UWB Trilateration:** Implemented a real-time positioning system using Ultra-Wideband (UWB) anchors and tags, managed via Arduino and processed in Python.
* **Mechanical Modeling:** Derived and solved differential equations for ball trajectory, accounting for gravity and air resistance to predict landing points.
* **Computer Vision:** Developed an automated tracking algorithm using OpenCV to extract coordinates from video feeds and validate the physical model.
* **Data Fusion:** Applied Gram-Schmidt orthonormalization and polynomial regression to filter noise and interpolate trajectories from raw sensor data.

## Technical Challenges

A major challenge was the precision of UWB distance measurements. I had to implement signal processing algorithms in Python to handle trilateration geometry and mitigate multi-path interference. Synchronizing the high-speed mechanical model with the visual data required precise calibration between the camera's coordinate system and the physical test area.

> "This study allowed me to bridge the gap between theoretical physics and real-time embedded data acquisition."

## Links
- [Technical Presentation (PDF)](/docs/Presentation.pdf)