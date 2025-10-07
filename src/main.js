import { inject } from "@vercel/analytics";
import Alpine from "alpinejs";
import resize from "@alpinejs/resize";
import { map, tileLayer, circle } from "leaflet";
import "leaflet/dist/leaflet.css";
import { david, mollie } from "./content/content.js";

Alpine.plugin(resize);

inject();

window.Alpine = Alpine;

Alpine.directive("leaflet", (element) => {
  const mapInstance = map(element, {
    preferCanvas: true,
    zoom: 8.4,
    doubleClickZoom: false,
    dragging: false,
    scrollWheelZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false,
    touchZoom: false,
    center: [42.616408, -85.4105223],
    layers: [
      tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }),
      circle([42.616408, -85.4105223], {
        color: "blue",
        weight: 2,
        fillColor: "blue",
        fillOpacity: 0.05,
        radius: 50000,
      }),
    ],
    zoomControl: false,
  });
});

Alpine.data("app", () => ({
  david,
  mollie,
}));

Alpine.start();
