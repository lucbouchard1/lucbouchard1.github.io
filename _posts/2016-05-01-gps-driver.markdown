---
layout: post
title:  "GPS Driver"
width:   3
date:   2016-04-30 11:31:49 +0200
---

<br>

*Project Overview:*

- Wrote a userspace driver in C to parse location data from a GPS reciever

<br>


This was my first project for PolySat when I joined as a freshman. It consisted of writing a userspace driver in C to communicate with a GPS reciever over UART and parse GPS nmea sentences. I was also invloved in testing and debugging the hardware once the electrical engineers had finished design and fabrication of the board.

Once the software and hardware were working properly, I worked with Aerospace Corp to test the module in their GPS simulator. This was important because our module was a COTS GPS with its CoCom limits disabled, so we had little information on its orbital performance.