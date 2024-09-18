# HaveIBeenCracked

- This is my side project to help people understand the importance of secure passwords, particularly for WiFi networks.

# About HaveIBeenCracked

## What is HaveIBeenCracked?

HaveIBeenCracked is an open-source project designed to help users understand the importance of secure passwords, particularly for WiFi networks. By searching for a WiFi network's SSID or BSSID in a database of pwned WiFi networks, users can quickly check if their network has been compromised. The database includes the SSID, BSSID, and the time when the network was first flagged. The goal is to encourage better security practices, such as avoiding weak passwords like "00000" that are easily cracked.

## Why I Created It

I was inspired by the popular service HaveIBeenPwned, which alerts users if their personal information has been exposed in data breaches. While HaveIBeenPwned focuses on personal data, I noticed a gap when it came to WiFi networks. Many people still use weak or default passwords for their WiFi, making them easy targets for attackers. I created HaveIBeenCracked to show people that WiFi security is not just a "cool word" but an essential part of protecting their privacy and devices.

## How to Use HaveIBeenCracked

Using HaveIBeenCracked is simple. You can search for your WiFi network by either its SSID (WiFi name) or BSSID (the unique identifier of the WiFi router). Once you search, the tool checks the database for any records of compromised networks. If your network is listed, it means it was found online with weak security settings, and you should update your WiFi password to something more secure immediately.

# Security Tips for WiFi Networks

## Why WiFi Security Matters

WiFi is the gateway to your devices and personal data. A compromised network can expose everything from your internet activity to sensitive personal information. That's why WiFi security is essential for keeping hackers at bay and ensuring your online privacy. Weak security settings, default passwords, and outdated encryption methods make your network an easy target for attackers.

## Use Strong, Random Passwords

The cornerstone of a secure WiFi network is a strong, random password. Many people make the mistake of using short or simple passwords like "password123" or even leaving the default password provided by the router. These are incredibly easy to crack using dictionary attacks or brute-force tools.

- **Why are short or common passwords bad?** Short passwords can be cracked in seconds using modern tools, and common passwords are easily found in password lists hackers use. 
- **Why is a random password good?** Humans are predictable. If we create our own passwords, we often base them on personal details like birthdates, names of family members, or favorite phrases. This makes passwords vulnerable to OSINT (Open Source Intelligence) attacks, where hackers gather information from your social media or public data. Randomly generated passwords eliminate this vulnerability because they don’t follow any patterns or personal clues hackers can exploit.
- **What makes a strong password?** A strong WiFi password should be at least 12-16 characters long and include a mix of letters (upper and lowercase), numbers, and symbols. It's best to use a password manager to generate and store a complex, random password that you don’t have to remember manually.


## Enable WPA3 Encryption

WiFi encryption protects the data that travels between your devices and the router. The latest standard, **WPA3**, is currently the most secure option available. It enhances protection against brute-force attacks and provides better security for devices that don’t have high processing power.

- **Why not WPA2 or WEP?** Older encryption methods like WPA2 and WEP are now considered insecure. WPA2 can be vulnerable to certain attacks, while WEP is so weak that it can be cracked in minutes using free tools. 
- **How to enable WPA3?** You can enable WPA3 in your router's settings, usually found in the "Wireless" or "Security" section. If WPA3 isn’t available, make sure to at least use WPA2, but upgrade your router if possible.

## Regularly Update Your Router's Firmware

Just like your computer or phone, your router needs updates to fix vulnerabilities and improve performance. Firmware updates often include important security patches that prevent attackers from exploiting weaknesses.

- **Why are firmware updates important?** Many older routers have unpatched vulnerabilities that hackers can easily exploit. Without updates, you leave your network exposed.
- **How to update firmware?** Check your router’s manual or manufacturer’s website for instructions on how to update its firmware. Many modern routers have an auto-update option, which is worth enabling to ensure you're always protected.

## Disable WPS (WiFi Protected Setup)

WiFi Protected Setup (WPS) is a feature that was meant to make connecting devices to your WiFi easier, but it has serious security flaws. Hackers can exploit WPS to gain access to your network within hours using brute-force attacks.

- **Why is WPS risky?** Even though it’s convenient, the PIN used in WPS is vulnerable to guessing attacks. Disabling this feature closes a significant security loophole.

## Change Your Router's Default Admin Password

Most routers come with a default username and password to access the settings page. These defaults are often well-known and can be found in lists available to hackers. Changing this is one of the easiest ways to secure your network.

- **Why is this important?** If someone can log into your router’s admin panel, they can change the settings, disable security features, or even lock you out of your own network.
- **How to change it?** Log into your router’s admin page (usually at a web address like 192.168.1.1) and look for the "Administration" or "Security" settings to update the password. Make sure this is different from your WiFi password.