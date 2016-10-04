---
layout: post
title:  "Memory Scrubbing"
width:   3 
date:   2016-08-30 11:31:49 +0200
---

<br>

*Project Overview:*

- Helped move PolySat avionics to a new memory architecture
- Implemented memory scrubbing software to add fault-tolerance to PolySat flight software
- Modified bootloader to conform to new memory architecture

<br>

This was a project I completed while I was working full-time at PolySat during the summer of 2016. Our flight computer's memory architecture had recently been redesigned to remove our dependence on phase change memory. Phase change memory is a low-cost, radiation-resistant memory chip that we previosuly employed on all PolySat satellites. However, this technology is now obsolete, and so we needed to move our flight computer to a flash-based memory architecture. Flash memory is much more susceptible to single event effects than phase change, so to prevent our bootloader, kernel, and file system images from being corrupted, I implemented a program in C that regularly computes a hash of all our core software and compares it to a hash that was computed on the ground. If an image is corrupted, it is replaced by a valid copy stored somewhere else in memory. To protect against flash chip failure, we have three seperate flash chips that maintain the same data. These chips are seperate from main memory on serial busses as to leave adequate room in main memory for less critical data.

<br>

This project also required significant modification to the PolySat bootloader, which scans all kernel and file system images before loading it into RAM and potentially putting the satellite into an unknown state. The new memory architecture required adding robustness to the bootloader so the system could boot from several chips.