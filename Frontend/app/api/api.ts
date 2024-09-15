"use server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Determines if Search is MAC or SSID
function isMAC(Search: string): boolean {
    return Search.includes(":");
}

// Function to convert MAC address back to a number
async function macToNumber(mac: string): Promise<number> {
    // Remove colons and convert the hexadecimal string to a number
    return parseInt(mac.replace(/:/g, ''), 16);
}
export async function getVendor(mac: string){
    let response = await fetch(`https://api.macvendors.com/${mac}`);
    // Response is in clear text or in case of error, it is in JSON
    let data = await response.text();
    if (response.ok){
        return data;
    }
    return "";
}
export async function getSearchResults(Search: string): Promise<nets[]> {
    // Check if the search is a MAC address
    let result = isMAC(Search);

    if (result == true){
        // If it is a MAC address, convert it to a number
        let bssidNum = await macToNumber(Search);
        // Search the database for the BSSID
        let matches = await prisma.nets.findMany({
            where: {
                BSSID: bssidNum
            }
        });
        return matches;
    }
    else{
        // If it is an SSID, search the database for the ESSID
        let matches = await prisma.nets.findMany({
            where: {
                ESSID: Search
            }
        });
        return matches;
    }
}