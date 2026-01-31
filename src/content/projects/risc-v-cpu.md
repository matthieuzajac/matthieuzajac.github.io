---
title: "RISC-V32I CPU Design"
description: "A custom 32-bit RISC-V processor implementation covering the full instruction cycle from fetch to write-back."
image: "/images/risc-v.webp"
date: 2025
tags: ["SystemVerilog", "Logisim", "Computer Architecture", "Digital Logic"]
---

## Project Overview

This project involved the ground-up architectural design of a RISC-V32I compliant CPU. The goal was to translate abstract ISA specifications into a functional hardware implementation capable of executing standard binary instructions.



## Key Features

* **Complete Datapath:** Designed and integrated the ALU, Register File, and Program Counter.
* **Control Unit Logic:** Implemented a Finite State Machine (FSM) to manage the instruction lifecycle (Fetch, Decode, Execute, Memory, Write-back).
* **Modular Memory:** Developed dedicated modules for instruction and data memory handling.
* **Automated Instruction conflict resolution**

## Technical Challenges

The primary challenge was ensuring synchronization between the control signals and the datapath to avoid race conditions. Moving from the visual logic of Logisim to the structural code of SystemVerilog required a deep understanding of hardware timing and resource allocation.

> "Building a CPU from scratch solidified my understanding of how software high-level logic translates into physical gate-level operations."