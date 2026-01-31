---
title: "Ascon Cipher RTL Implementation"
description: "Hardware implementation of the Ascon-AEAD128 encryption algorithm following standard industry verification cycles."
image: "/images/aead.png"
date: 2024
tags: ["SystemVerilog", "RTL Design", "Cryptography", "Modelsim"]
---

## Project Overview

I implemented the Ascon-AEAD128 authenticated encryption algorithm, focusing on hardware efficiency and security. Ascon is a NIST-standardized lightweight cipher designed for IoT and resource-constrained environments.

## Key Features

* **RTL Design:** Structured SystemVerilog code optimized for synthesis and hardware throughput.
* **Verification Suite:** Developed a robust testbench in Modelsim to verify cipher correctness against golden vectors.

## Technical Challenges

Implementing the non-linear S-box and linear diffusion layers in hardware required careful management of bit-wise permutations. Ensuring the implementation was side-channel resistant at the logic level was a key consideration during the design phase.

> "Standard RTL methodology is the backbone of reliable silicon; this project was an exercise in precision and verification-first design."