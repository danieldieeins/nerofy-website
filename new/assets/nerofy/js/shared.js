if(location.href.includes("nrfy.net")||location.href.includes("danieldieeins.github.io")) {
    location.href = location.href.replaceAll("nrfy.net", "nerofy.de").replaceAll("danieldieeins.github.io","nerofy.de");
} else {
    if(location.href.includes("nerofy.de")&&!location.href.includes("www.nerofy.de")) {
        location.href = location.href.replaceAll("nerofy.de", "www.nerofy.de");
    }
}