"use client";

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for missing marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const ClientMap = () => {
  useEffect(() => {
    // Configure default marker icon
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIconRetina,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });

    // Check if the map container already exists and remove it to avoid reinitialization issues
    const mapContainer = document.getElementById("map");
    if (mapContainer && mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null;
    }

    // Initialize the map
    const map = L.map("map").setView([22.5726, 88.3639], 13); // Example coordinates for Kolkata

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add a marker to the map
    const marker = L.marker([22.57789, 88.43687]).addTo(map);
    marker.bindPopup("<b>Kolkata</b><br>West Bengal, India").openPopup();

    // Cleanup function to destroy the map instance
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
};

export default ClientMap;