interface WiFiMatch {
    ssid: string;
    bssid: string;
    timestamp: string;
    vendor: string;
}

interface nets {
    id: number;
    time: Date | null;
    BSSID: bigint | null;
    ESSID: string | null;
}