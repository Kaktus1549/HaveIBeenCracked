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
export async function getVendor(mac: string): Promise<string> {
    let prefixLength = mac.length; // Start with the full MAC address length
    
    while (prefixLength > 0) {
      // Try to find a match with the current prefix length
      const vendor = await prisma.vendorsList.findFirst({
        where: {
          macPrefix: mac.substring(0, prefixLength), // Dynamically reduce prefix length
        },
        orderBy: {
          macPrefix: 'desc', // Order by length of macPrefix descending
        },
      });
      
      // If a vendor is found, return the vendor name
      if (vendor) {
        return vendor.vendorName ?? "";
      }
      
      // Reduce the prefix length by 1 and try again
      prefixLength--;
    }
    
    // If no match is found, return null or a default value
    return "";
}