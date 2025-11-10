---
title: SD Card
---
# SD Card
## Introduction
::: info
If you're looking for a more elegant solution to this and the reset switch, [WebHDX's sd-rst board](sdrst) is for you.
:::

An SD card slot is a helpful addition to the Wii mini, as it enables the use of some homebrew that do not work with a USB drive, such as BootMii IOS for creating NAND backups, it also allows you to have a lower profile storage medium than a USB device.

## Parts Required

1. 	An SD or microSD card breakout board that supports the SD protocol (not just SPI) We recommend [this SD card reader from Sparkfun](https://www.sparkfun.com/products/12941) or [this push-push microSD one from Adafruit](https://www.adafruit.com/product/4682) (Not affiliated with either company)
1.	Multiple colours of thin (≤32awg) wire, 7-8 colours are recommended for easier wiring, you may also use a wire ribbon for the same effect.
1.	An SD or microSD card of your choice, formatted as fat32 with Master Boot Record. (While any size should work, some homebrew will not work with cards above 32gb and a few older ones may even have a 2gb limit)
1.	(Optional) A 10-100nF ceramic capacitor of any kind for decoupling

## Installation

1.	Cut 8 strands of wire of the same length (the shorter and the closer they are in length to each other, the better the signal integrity). They should start from the test point section marked [C] on the bottom side of the board (coloured blue in the picture below) and reach to where you want your SD card slot to be mounted. Make sure to give them a little extra slack to allow for stripping the ends and in case you make a mistake. It's easier if the wires are different colours so that you can tell them apart, or if you use ribboned wire.
	![Wii mini board bottom side](/images/motherboard/motherboard-side-a.png)
1.	Board section [C] contains the following test pads:

	![Section C TP numbering](/images/motherboard/SectionC-SDcard.png)

	these map to the following pins on the sd card adapters (they may have multiple names depending on your adapter):

	::::: tabs
	:::: tab SD
	| Test Pad | Name(s) | SD card pin |
	|----------|---------|------------|
	|TP166     |Dat2     |9           |
	|TP167     |Dat3/CS  |1           |
	|TP163     |CMD/DI/MOSI   |2      |
	|TP172     |GND/VSS  |3,6         |
	|TP171     |3v3/VDD/Vin|4         |
	|TP162     |CLK      |5           |
	|TP164     |Dat0/DO/MISO  |7      |
	|TP165     |Dat1     |8           |
	|TP168     |CD/Det (Card Detect)|N/A, on breakout board|
	|TP169     |WP/WL (Write Lock)|N/A, on breakout board|
	
	(if CD and/or WL are unavailable, short TP168 and/or TP169 respectively to ground to bypass them).

	Note: Some SD breakout boards have the Card Detect pin active high, which is opposite of what the Wii mini expects. If you are using one of these boards, you will need to short TP168 to any GND pin on the board. This will not affect the cards operation other than making it always appear to be inserted. Please check your breakout board's datasheet for more information. The same may apply to the Write Lock pin, but this is not as common.
	
	SD Card pins map as follows (image provided by [pinouts.org](https://pinouts.org)): ![SD Pinout](/images/pimp-my-mini/SD-pinout.png)
	::::

	:::: tab microSD
	| Test Pad | Name(s) | microSD card pin |
	|----------|---------|------------|
	|TP166     |Dat2     |1           |
	|TP167     |Dat3/CS  |2           |
	|TP163     |CMD/DI/MOSI   |3      |
	|TP171     |3v3/VDD/Vin|4         |
	|TP162     |CLK      |5           |
	|TP172     |GND/VSS  |6           |
	|TP164     |Dat0/DO/MISO  |7      |
	|TP165     |Dat1     |8           |
	|TP168     |CD/Det (Card Detect)|N/A, on breakout board|
	|TP169     |WP/WL (Write Lock)|N/A, wire it to any GND|

	(if CD is unavailable, short TP168 to any ground to bypass it).
	
	Note: Some microSD breakout boards, like the Adafruit one recommended above will have the Card Detect pin active high, which is opposite of what the Wii mini expects. If you are using one of these boards, you will need to short TP168 to any GND pin on the board. This will not affect the cards operation other than making it always appear to be inserted. Please check your breakout board's datasheet for more information. The same may apply to the Write Lock pin, but this is not as common.

	microSD Card pins map as follows (image provided by [pinouts.org](https://pinouts.org)): ![microSD Pinout](/images/pimp-my-mini/microSD-pinout.png)
	::::

	:::::
1. You may optionally add a 10-100nF ceramic capacitor between 3.3v and gnd near the sd slot for decoupling.

## Post-Install

While the card reader is installed, it will not be functional yet, as the stock Wii mini IOS does not include SD support. For that, you will have to install a customized version of the original Wii IOS that removes the need for a WiFi card, as well as the original Wii system menu to restore the removed SD card menu.

If you haven't already, you will need to install the original Wii System Menu:

::: info
[Continue to installing the System Menu (no WiFi card)](sminstall-nowifi)
Without a WiFi card, a special procedure has to be followed to restore SD card functionality, as well as other stripped out features.
:::

If you already have a WiFi card installed, you should have already re-installed the System Menu. 

::: info
[Return to Pick-a-Pimp](pick-a-pimp) | [Continue to site navigation](site-navigation)<br>
We have other tutorials that you might like.
:::

::: success
We'd love to see your completed mod, feel free to join us on [our Discord](https://discord.gg/6ryxnkS) and post a picture in #the-forums!
:::
