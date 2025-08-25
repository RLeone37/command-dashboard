// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "KR4GGJ - RJLdrone";
var topBarCenterTextColor = "limegreen";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "2196F3",
    "APRS",
    "https://aprs.to/?center=43,-79&zoom=11",
    "1"
  ],
  [
    "2196F3",
    "CLUBLOG",
    "https://clublog.org/livestream/VA3HDL",
    "1"
  ],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1"
  ],
  [
    "2196F3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    "1"
  ],
  [
    "2196F3",
    "ADSB",
    "https://globe.adsbexchange.com/",
    "1",
    "R"
  ],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R"
  ],
  [
    "2196F3",
    "PISTAR",
    "http://pi-star.local/",
    "1"
  ],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WINLINK",
    "https://cms.winlink.org:444/maps/propagation.aspx",
    "1"
  ],
  [
    "2196F3",
    "Stuff In Space",
    "https://stuffin.space/",
    "1",
    "R"
  ],
  [
    "2196F3",
    "TIME.IS",
    "https://time.is/",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R"
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R"
  ]
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "RADAR",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KTBW_loop.gif"
  ],
  [
    "NATIONAL FORECAST",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif?1755916220"
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
    "https://www.blitzortung.org/en/Images/image_b_fl.png"
  ],
  [
    "SATELLITE CONUS",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/CONUS/GEOCOLOR/GOES19-CONUS-GEOCOLOR-625x375.gif"
  ],
  [
    "SATELLITE SE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/se/GEOCOLOR/GOES19-SE-GEOCOLOR-600x600.gif"
  ],
  [
    "ATLANTIC 2-DAY",
    "https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_2d0.png"
  ],
  [
    "ATLANTIC 7-DAY",
    "https://www.nhc.noaa.gov/archive/xgtwo/atl/latest/two_atl_7d0.png"
  ],
  [
    "GREY LINE / ISS / RS-44",
    "https://www.timeanddate.com/scripts/sunmap.php?iso=now",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909"
  ],
  [
    "ADS-B",
    "iframe|https://globe.adsbexchange.com/"
  ],
  [
    "LIRR",
    "iframe|https://radar.mta.info/"
  ],
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php",
    "https://www.hamqsl.com/solarpich.php"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  30100,
  30200,
  10100,
  30300,
  30400,
  15000,
  30500,
  30600,
  10200,
  30700,
  30800,
  10300
];

// CUT END