---
title: "FPGA Secure ECG Transmission System"
description: "End-to-end hardware system on a PYNQ-Z2 FPGA combining ECG signal acquisition, UART communication, and real-time ASCON encryption."
image: "/images/fpga.webp"
date: 2026
tags: ["SystemVerilog", "FPGA", "UART", "Ascon", "Vivado", "ZYNQ", "FSM", "Digital Design"]
---

## Project Overview

Designed and implemented a complete end-to-end secure data acquisition system on the **PYNQ-Z2** development board (Xilinx ZYNQ 7020 SoC). The system captures ECG signals from a bioelectronics shield, transmits the data over a **UART** serial link, and secures it in real time using the **ASCON lightweight cipher** — all implemented in hardware using SystemVerilog and the Vivado 2022.2 toolchain.

## System Architecture

The pipeline integrates three independent subsystems synthesized on the FPGA fabric:

* **ECG Acquisition Frontend:** Interfaces with an Arduino-compatible ECG sensor shield to sample bioelectrical signals and feed raw data into the processing pipeline.
* **UART Serial Interface:** A hardware FSM-based UART controller manages framing, baud-rate generation, and byte-level serial communication between the FPGA and a host computer.
* **ASCON Encryption Core:** A SystemVerilog implementation of the ASCON-AEAD lightweight cipher encrypts ECG frames before transmission, ensuring data confidentiality.

## Key Features

* **Full RTL Design:** All subsystems implemented at the register-transfer level in SystemVerilog, targeting FPGA-specific primitives and resources.
* **Finite State Machine Design:** Control logic for both the UART protocol and the ASCON encryption pipeline modeled as explicit, synthesizable FSMs.
* **IP Integration:** Leveraged Xilinx IP cores within the Vivado block design environment and used the Integrated Logic Analyzer (ILA) for in-system signal debugging.
* **Python Host Software:** Companion Python scripts handle UART reception, on-the-fly decryption, signal reconstruction, and real-time ECG waveform visualization.

## Technical Challenges

The main challenge was timing closure across the full pipeline: synchronizing the asynchronous UART stream with the block-oriented ASCON cipher required careful handshake logic and buffering. Managing the FPGA clock domains and ensuring bit-accurate ASCON encryption output — verified against software golden vectors — demanded rigorous testbench development before moving to on-board testing.

> "Bridging hardware security with bioelectronics on a single FPGA taught me how real systems demand co-design thinking across every layer of the stack."
