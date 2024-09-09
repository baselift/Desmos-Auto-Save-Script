# Desmos-Auto-Save-Script

## Backstory
For some reason Desmos has no auto save feature, so I while back I decided to make a Tampermonkey script that will auto-save every 5000ms (can be changed to your liking).
**Note that the script can break due to changes in how Desmos is coded

## Installation
Requirements: You must be logged in and have saved the graph with a name (you can tell if this is the case if the link is https://www.desmos.com/calculator/*, where * is a random string)
Once you have saved it with a name, you will have to refresh so script is running

- Download the file (called Desmos Auto-Save-x.user.js, where x is the version number)
- Download Tampermonkey as an browser extension if you have not already (follow the instructors for your browser on https://www.tampermonkey.net)
- Once installed open up the Tampermonkey extension main menu (usually there is a extension icon that you have to click, for MS Edge it is the jigsaw piece at the top right)
- Once opened up, click on Dashboard ![image](https://github.com/user-attachments/assets/80649d12-f868-4c3b-a384-4f985632a362)
- Then click on the button named Utilities ![image](https://github.com/user-attachments/assets/ab31e923-e122-4bef-b1f0-e332cced011d)
- Then in the Import From File section, click Upload from file, and select the file you just downloaded
- Then follow the instructions to add the script to Tampermonkey

## Usage
The script will (hopefully!) work on its own, and the auto-save timer can be adjusted by opening up Tampermonkey's main menu and selecting the script and editing it.
You will need to edit this part:
![image](https://github.com/user-attachments/assets/5c1776b0-06e8-4415-be26-acaef078a6bc)
**NOTE that the time is in miliseconds (1000 ms = 1s)



