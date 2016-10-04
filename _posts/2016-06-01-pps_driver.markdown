---
layout: post
title:  "PPS Driver"
width:   3
date:   2016-06-10 11:31:49 +0200
---

<br>

*Project Overview:*

- Wrote a Linux kernel module to handle pulse-per-second interrupts from a GPS
- Made tke system time that the pulse occured available to userspace for clock synchronization

<br>

This completed this project while working full-time at PolySat during the summer of 2016. We were adding a GPS to our flight computer, and wanted to sycnhronize our clock to the GPS to take advantage of its extremely accurate timing. This was done by tying the GPS's pulse-per-second line to one of our interrupts. To support this in software, I wrote a Linux kernel module recoreded the system time whenever an interrupt occured. The recorded time was then made available to userspace via the read system call. To learn how to do this, I read through the book <i>[Linux Device Drivers](http://shop.oreilly.com/product/9780596005900.do)</i> and utilized the PolySat faculty advisor.

<br>

I will admit that in terms of Linux modules, this is about as simple as it gets; however, it was a great learning expericnce and a window in to kernal development.