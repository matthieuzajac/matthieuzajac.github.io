---
title: "Embedded AI — Predictive Maintenance on STM32"
description: "End-to-end deployment of a deep neural network for predictive maintenance on an STM32L4R9 microcontroller using STM32Cube.AI."
image: "/images/embedded-ai.webp"
date: 2026
tags: ["Embedded AI", "STM32", "TensorFlow", "STM32Cube.AI", "Python", "Machine Learning", "DNN"]
---

## Project Overview

Designed, trained, and deployed a **Deep Neural Network (DNN)** for predictive maintenance directly on an **STM32L4R9** microcontroller. The project covers the full embedded ML pipeline — from raw data preprocessing to live on-device inference — using the **AI4I 2020 Predictive Maintenance Dataset** and the **STM32Cube.AI** toolchain.

## Pipeline

1. **Data Preprocessing:** Cleaned and normalized the AI4I 2020 dataset, handling class imbalance and engineering discriminative features from sensor readings (temperature, torque, rotational speed, tool wear).
2. **Model Design & Training:** Built and trained a DNN in Python (Google Colab), iterating on architecture depth, activation functions, and regularization to maximize classification performance while keeping the model footprint small enough for deployment.
3. **Performance Evaluation:** Assessed accuracy, precision, recall, and F1-score using held-out test splits; analyzed the confusion matrix to characterize failure-mode detection capability.
4. **Model Conversion:** Exported the trained model via **STM32Cube.AI**, analyzing network size, RAM/Flash footprint, and computational cost on the target MCU.
5. **STM32CubeIDE Integration:** Integrated the converted model into a bare-metal STM32CubeIDE project, wiring the inference engine to sensor input buffers and live output reporting.

## Key Features

* **Full Embedded ML Workflow:** Covers every stage from data science to microcontroller firmware, following industrial embedded AI practices.
* **Resource Analysis:** Used STM32Cube.AI's profiler to evaluate the trade-off between model complexity and on-device memory constraints.
* **Professional Git Workflow:** Developed collaboratively on GitLab with feature branches, incremental commits, and descriptive commit messages reflecting real project evolution.
* **Bonus — MCUNet Exploration:** Investigated MCUNet as an alternative ultra-compact architecture for even tighter memory budgets.

## Technical Challenges

Fitting a meaningful DNN within the strict RAM and Flash limits of a Cortex-M4 required iterative pruning and quantization analysis. Ensuring that classification latency remained acceptable for real-time predictive maintenance decisions — without an OS or runtime — demanded careful profiling at every step of the conversion process.

> "Taking a model from a Colab notebook to bare-metal inference on a microcontroller showed me the full gap between ML research and production-grade embedded systems."
