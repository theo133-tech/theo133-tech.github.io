function time() {
  var time = document.getElementById('timeDis');
  const date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day = date.getDay() + 2;
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  time.innerHTML = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
}
setInterval(time, 1000);

var e1T = new Date("Jun 13, 2024 08:45:00").getTime();
var e2T = new Date("Jun 13, 2024 10:45:00").getTime();
var c1T = new Date("Jun 12, 2024 08:30:00").getTime();
var c2T = new Date("Jun 12, 2024 10:30:00").getTime();
var mp1T = new Date("Jun 17, 2024 08:30:00").getTime();
var mp2T = new Date("Jun 17, 2024 11:15:00").getTime();
var e3T = new Date("Jun 18, 2024 10:30:00").getTime();
var baT = new Date("Jun 14, 2024 08:30:00").getTime();
var ba2T = new Date("Jun 14, 2024 10:00:00").getTime();
var csT = new Date("Jun 20, 2024 08:30:00").getTime();
var ictT = new Date("Jun 21, 2024 08:30:00").getTime();
var ict2T = new Date("Jun 21, 2024 11:00:00").getTime();
var chisT = new Date("Jun 21, 2024 08:30:00").getTime();
var bioT = new Date("Jun 21, 2024 08:30:00").getTime();
var vaT = new Date("Jun 21, 2024 08:30:00").getTime();
var econ1T = new Date("Jun 19, 2024 08:30:00").getTime();
var econ2T = new Date("Jun 19, 2024 10:00:00").getTime();
var mus1aT = new Date("Jun 24, 2024 08:45:00").getTime();
var mus1bT = new Date("Jun 24, 2024 10:45:00").getTime();
var histT = new Date("Jun 24, 2024 08:45:00").getTime();
var hist2T = new Date("Jun 24, 2024 11:15:00").getTime();
var clit1T = new Date("Jun 24, 2024 08:45:00").getTime();
var clit2T = new Date("Jun 24, 2024 11:15:00").getTime();
var phyT = new Date("Jun 24, 2024 08:45:00").getTime();
var geoT = new Date("Jun 24, 2024 08:45:00").getTime();
var geo2T = new Date("Jun 24, 2024 12:00:00").getTime();
var mus2T = new Date("Jun 19, 2024 08:30:00").getTime();
var e4T = new Date("Jun 26, 2024 10:30:00").getTime();
var chemT = new Date("Jun 25, 2024 08:30:00").getTime();
var m2T = new Date("Jun 27, 2024 08:30:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var e1Distance = e1T - now;
  var e2Distance = e2T - now;
  var c1Distance = c1T - now;
  var c2Distance = c2T - now;
  var mp1Distance = mp1T - now;
  var mp2Distance = mp2T - now;
  var e3Distance = e3T - now;
  var baDistance = baT - now;
  var ba2Distance = ba2T - now;
  var csDistance = csT - now;
  var ictDistance = ictT - now;
  var ict2Distance = ict2T - now;
  var chisDistance = chisT - now;
  var bioDistance = bioT - now;
  var vaDistance = vaT - now;
  var econ1Distance = econ1T - now;
  var econ2Distance = econ2T - now;
  var mus1aDistance = mus1aT - now;
  var mus1bDistance = mus1bT - now;
  var histDistance = histT - now;
  var hist2Distance = hist2T - now;
  var clit1Distance = clit1T - now;
  var clit2Distance = clit2T - now;
  var phyDistance = phyT - now;
  var geoDistance = geoT - now;
  var geo2Distance = geo2T - now;
  var mus2Distance = mus2T - now;
  var e4Distance = e4T - now;
  var chemDistance = chemT - now;
  var m2Distance = m2T - now;

  var e1Days = Math.floor(e1Distance / (1000 * 60 * 60 * 24));
  var e2Days = Math.floor(e2Distance / (1000 * 60 * 60 * 24));
  var c1Days = Math.floor(c1Distance / (1000 * 60 * 60 * 24));
  var c2Days = Math.floor(c2Distance / (1000 * 60 * 60 * 24));
  var mp1Days = Math.floor(mp1Distance / (1000 * 60 * 60 * 24));
  var mp2Days = Math.floor(mp2Distance / (1000 * 60 * 60 * 24));
  var e3Days = Math.floor(e3Distance / (1000 * 60 * 60 * 24));
  var baDays = Math.floor(baDistance / (1000 * 60 * 60 * 24));
  var ba2Days = Math.floor(ba2Distance / (1000 * 60 * 60 * 24));
  var csDays = Math.floor(csDistance / (1000 * 60 * 60 * 24));
  var ictDays = Math.floor(ictDistance / (1000 * 60 * 60 * 24));
  var ict2Days = Math.floor(ict2Distance / (1000 * 60 * 60 * 24));
  var chisDays = Math.floor(chisDistance / (1000 * 60 * 60 * 24));
  var bioDays = Math.floor(bioDistance / (1000 * 60 * 60 * 24));
  var vaDays = Math.floor(vaDistance / (1000 * 60 * 60 * 24));
  var econ1Days = Math.floor(econ1Distance / (1000 * 60 * 60 * 24));
  var econ2Days = Math.floor(econ2Distance / (1000 * 60 * 60 * 24));
  var mus1aDays = Math.floor(mus1aDistance / (1000 * 60 * 60 * 24));
  var mus1bDays = Math.floor(mus1bDistance / (1000 * 60 * 60 * 24));
  var histDays = Math.floor(histDistance / (1000 * 60 * 60 * 24));
  var hist2Days = Math.floor(hist2Distance / (1000 * 60 * 60 * 24));
  var clit1Days = Math.floor(clit1Distance / (1000 * 60 * 60 * 24));
  var clit2Days = Math.floor(clit2Distance / (1000 * 60 * 60 * 24));
  var phyDays = Math.floor(phyDistance / (1000 * 60 * 60 * 24));
  var geoDays = Math.floor(geoDistance / (1000 * 60 * 60 * 24));
  var geo2Days = Math.floor(geo2Distance / (1000 * 60 * 60 * 24));
  var mus2Days = Math.floor(mus2Distance / (1000 * 60 * 60 * 24));
  var e4Days = Math.floor(e4Distance / (1000 * 60 * 60 * 24));
  var chemDays = Math.floor(chemDistance / (1000 * 60 * 60 * 24));
  var m2Days = Math.floor(m2Distance / (1000 * 60 * 60 * 24));

  var e1Hours = Math.floor(e1Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var e2Hours = Math.floor(e2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var c1Hours = Math.floor(c1Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var c2Hours = Math.floor(c2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mp1Hours = Math.floor(mp1Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mp2Hours = Math.floor(mp2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var e3Hours = Math.floor(e3Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var baHours = Math.floor(baDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var ba2Hours = Math.floor(ba2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var csHours = Math.floor(csDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var ictHours = Math.floor(ictDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var ict2Hours = Math.floor(ict2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var chisHours = Math.floor(chisDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var bioHours = Math.floor(bioDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var vaHours = Math.floor(vaDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var econ1Hours = Math.floor(econ1Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var econ2Hours = Math.floor(econ2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mus1aHours = Math.floor(mus1aDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mus1bHours = Math.floor(mus1bDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var histHours = Math.floor(histDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var hist2Hours = Math.floor(hist2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var clit1Hours = Math.floor(clit1Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var clit2Hours = Math.floor(clit2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var phyHours = Math.floor(phyDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var geoHours = Math.floor(geoDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var geo2Hours = Math.floor(geo2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var mus2Hours = Math.floor(mus2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var e4Hours = Math.floor(e4Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var chemHours = Math.floor(chemDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var m2Hours = Math.floor(m2Distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

  var e1Minutes = Math.floor(e1Distance % (1000 * 60 * 60) / (1000 * 60));
  var e2Minutes = Math.floor(e2Distance % (1000 * 60 * 60) / (1000 * 60));
  var c1Minutes = Math.floor(c1Distance % (1000 * 60 * 60) / (1000 * 60));
  var c2Minutes = Math.floor(c2Distance % (1000 * 60 * 60) / (1000 * 60));
  var mp1Minutes = Math.floor(mp1Distance % (1000 * 60 * 60) / (1000 * 60));
  var mp2Minutes = Math.floor(mp2Distance % (1000 * 60 * 60) / (1000 * 60));
  var e3Minutes = Math.floor(e3Distance % (1000 * 60 * 60) / (1000 * 60));
  var baMinutes = Math.floor(baDistance % (1000 * 60 * 60) / (1000 * 60));
  var ba2Minutes = Math.floor(ba2Distance % (1000 * 60 * 60) / (1000 * 60));
  var csMinutes = Math.floor(csDistance % (1000 * 60 * 60) / (1000 * 60));
  var ictMinutes = Math.floor(ictDistance % (1000 * 60 * 60) / (1000 * 60));
  var ict2Minutes = Math.floor(ict2Distance % (1000 * 60 * 60) / (1000 * 60));
  var chisMinutes = Math.floor(chisDistance % (1000 * 60 * 60) / (1000 * 60));
  var bioMinutes = Math.floor(bioDistance % (1000 * 60 * 60) / (1000 * 60));
  var vaMinutes = Math.floor(vaDistance % (1000 * 60 * 60) / (1000 * 60));
  var econ1Minutes = Math.floor(econ1Distance % (1000 * 60 * 60) / (1000 * 60));
  var econ2Minutes = Math.floor(econ2Distance % (1000 * 60 * 60) / (1000 * 60));
  var mus1aMinutes = Math.floor(mus1aDistance % (1000 * 60 * 60) / (1000 * 60));
  var mus1bMinutes = Math.floor(mus1bDistance % (1000 * 60 * 60) / (1000 * 60));
  var histMinutes = Math.floor(histDistance % (1000 * 60 * 60) / (1000 * 60));
  var hist2Minutes = Math.floor(hist2Distance % (1000 * 60 * 60) / (1000 * 60));
  var clit1Minutes = Math.floor(clit1Distance % (1000 * 60 * 60) / (1000 * 60));
  var clit2Minutes = Math.floor(clit2Distance % (1000 * 60 * 60) / (1000 * 60));
  var phyMinutes = Math.floor(phyDistance % (1000 * 60 * 60) / (1000 * 60));
  var geoMinutes = Math.floor(geoDistance % (1000 * 60 * 60) / (1000 * 60));
  var geo2Minutes = Math.floor(geo2Distance % (1000 * 60 * 60) / (1000 * 60));
  var mus2Minutes = Math.floor(mus2Distance % (1000 * 60 * 60) / (1000 * 60));
  var e4Minutes = Math.floor(e4Distance % (1000 * 60 * 60) / (1000 * 60));
  var chemMinutes = Math.floor(chemDistance % (1000 * 60 * 60) / (1000 * 60));
  var m2Minutes = Math.floor(m2Distance % (1000 * 60 * 60) / (1000 * 60));

  var e1Seconds = Math.floor(e1Distance % (1000 * 60) / 1000);
  var e2Seconds = Math.floor(e2Distance % (1000 * 60) / 1000);
  var c1Seconds = Math.floor(c1Distance % (1000 * 60) / 1000);
  var c2Seconds = Math.floor(c2Distance % (1000 * 60) / 1000);
  var mp1Seconds = Math.floor(mp1Distance % (1000 * 60) / 1000);
  var mp2Seconds = Math.floor(mp2Distance % (1000 * 60) / 1000);
  var e3Seconds = Math.floor(e3Distance % (1000 * 60) / 1000);
  var baSeconds = Math.floor(baDistance % (1000 * 60) / 1000);
  var ba2Seconds = Math.floor(ba2Distance % (1000 * 60) / 1000);
  var csSeconds = Math.floor(csDistance % (1000 * 60) / 1000);
  var ictSeconds = Math.floor(ictDistance % (1000 * 60) / 1000);
  var ict2Seconds = Math.floor(ict2Distance % (1000 * 60) / 1000);
  var chisSeconds = Math.floor(chisDistance % (1000 * 60) / 1000);
  var bioSeconds = Math.floor(bioDistance % (1000 * 60) / 1000);
  var vaSeconds = Math.floor(vaDistance % (1000 * 60) / 1000);
  var econ1Seconds = Math.floor(econ1Distance % (1000 * 60) / 1000);
  var econ2Seconds = Math.floor(econ2Distance % (1000 * 60) / 1000);
  var mus1aSeconds = Math.floor(mus1aDistance % (1000 * 60) / 1000);
  var mus1bSeconds = Math.floor(mus1bDistance % (1000 * 60) / 1000);
  var histSeconds = Math.floor(histDistance % (1000 * 60) / 1000);
  var hist2Seconds = Math.floor(hist2Distance % (1000 * 60) / 1000);
  var clit1Seconds = Math.floor(clit1Distance % (1000 * 60) / 1000);
  var clit2Seconds = Math.floor(clit2Distance % (1000 * 60) / 1000);
  var phySeconds = Math.floor(phyDistance % (1000 * 60) / 1000);
  var geoSeconds = Math.floor(geoDistance % (1000 * 60) / 1000);
  var geo2Seconds = Math.floor(geo2Distance % (1000 * 60) / 1000);
  var mus2Seconds = Math.floor(mus2Distance % (1000 * 60) / 1000);
  var e4Seconds = Math.floor(e4Distance % (1000 * 60) / 1000);
  var chemSeconds = Math.floor(chemDistance % (1000 * 60) / 1000);
  var m2Seconds = Math.floor(m2Distance % (1000 * 60) / 1000);

  document.getElementById('e1').innerHTML = e1Days + "d" + e1Hours + "h" + e1Minutes + "m" + e1Seconds + "s";
  document.getElementById('e2').innerHTML = e2Days + "d" + e2Hours + "h" + e2Minutes + "m" + e2Seconds + "s";
  document.getElementById('c1').innerHTML = c1Days + "d" + c1Hours + "h" + c1Minutes + "m" + c1Seconds + "s";
  document.getElementById('c2').innerHTML = c2Days + "d" + c2Hours + "h" + c2Minutes + "m" + c2Seconds + "s";
  document.getElementById('mp1').innerHTML = mp1Days + "d" + mp1Hours + "h" + mp1Minutes + "m" + mp1Seconds + "s";
  document.getElementById('mp2').innerHTML = mp2Days + "d" + mp2Hours + "h" + mp2Minutes + "m" + mp2Seconds + "s";
  document.getElementById('e3').innerHTML = e3Days + "d" + e3Hours + "h" + e3Minutes + "m" + e3Seconds + "s";
  document.getElementById('ba').innerHTML = baDays + "d" + baHours + "h" + baMinutes + "m" + baSeconds + "s";
  document.getElementById('ba2').innerHTML = ba2Days + "d" + ba2Hours + "h" + ba2Minutes + "m" + ba2Seconds + "s";
  document.getElementById('cs').innerHTML = csDays + "d" + csHours + "h" + csMinutes + "m" + csSeconds + "s";
  document.getElementById('ict').innerHTML = ictDays + "d" + ictHours + "h" + ictMinutes + "m" + ictSeconds + "s";
  document.getElementById('ict2').innerHTML = ict2Days + "d" + ict2Hours + "h" + ict2Minutes + "m" + ict2Seconds + "s";
  document.getElementById('chis').innerHTML = chisDays + "d" + chisHours + "h" + chisMinutes + "m" + chisSeconds + "s";
  document.getElementById('bio').innerHTML = bioDays + "d" + bioHours + "h" + bioMinutes + "m" + bioSeconds + "s";
  document.getElementById('va').innerHTML = vaDays + "d" + vaHours + "h" + vaMinutes + "m" + vaSeconds + "s";
  document.getElementById('econ1').innerHTML = econ1Days + "d" + econ1Hours + "h" + econ1Minutes + "m" + econ1Seconds + "s";
  document.getElementById('econ2').innerHTML = econ2Days + "d" + econ2Hours + "h" + econ2Minutes + "m" + econ2Seconds + "s";
  document.getElementById('mus1a').innerHTML = mus1aDays + "d" + mus1aHours + "h" + mus1aMinutes + "m" + mus1aSeconds + "s";
  document.getElementById('mus1b').innerHTML = mus1bDays + "d" + mus1bHours + "h" + mus1bMinutes + "m" + mus1bSeconds + "s";
  document.getElementById('hist').innerHTML = histDays + "d" + histHours + "h" + histMinutes + "m" + histSeconds + "s";
  document.getElementById('hist2').innerHTML = hist2Days + "d" + hist2Hours + "h" + hist2Minutes + "m" + hist2Seconds + "s";
  document.getElementById('clit1').innerHTML = clit1Days + "d" + clit1Hours + "h" + clit1Minutes + "m" + clit1Seconds + "s";
  document.getElementById('clit2').innerHTML = clit2Days + "d" + clit2Hours + "h" + clit2Minutes + "m" + clit2Seconds + "s";
  document.getElementById('phy').innerHTML = phyDays + "d" + phyHours + "h" + phyMinutes + "m" + phySeconds + "s";
  document.getElementById('geo').innerHTML = geoDays + "d" + geoHours + "h" + geoMinutes + "m" + geoSeconds + "s";
  document.getElementById('geo2').innerHTML = geo2Days + "d" + geo2Hours + "h" + geo2Minutes + "m" + geo2Seconds + "s";
  document.getElementById('mus2').innerHTML = mus2Days + "d" + mus2Hours + "h" + mus2Minutes + "m" + mus2Seconds + "s";
  document.getElementById('e4').innerHTML = e4Days + "d" + e4Hours + "h" + e4Minutes + "m" + e4Seconds + "s";
  document.getElementById('chem').innerHTML = chemDays + "d" + chemHours + "h" + chemMinutes + "m" + chemSeconds + "s";
  document.getElementById('m2').innerHTML = m2Days + "d" + m2Hours + "h" + m2Minutes + "m" + m2Seconds + "s";

  if (e1Distance <= 0) {
    document.getElementById('e1').innerHTML = "Exam is over!!!";
  }
  if (e2Distance <= 0) {
    document.getElementById('e2').innerHTML = "Exam is over!!!";
  }
  if (c1Distance <= 0) {
    document.getElementById('c1').innerHTML = "Exam is over!!!";
  }
  if (c2Distance <= 0) {
    document.getElementById('c2').innerHTML = "Exam is over!!!";
  }
  if (mp1Distance <= 0) {
    document.getElementById('mp1').innerHTML = "Exam is over!!!";
  }
  if (mp2Distance <= 0) {
    document.getElementById('mp2').innerHTML = "Exam is over!!!";
  }
  if (e3Distance <= 0) {
    document.getElementById('e3').innerHTML = "Exam is over!!!";
  }
  if (baDistance <= 0) {
    document.getElementById('ba').innerHTML = "Exam is over!!!";
  }
  if (ba2Distance <= 0) {
    document.getElementById('ba').innerHTML = "Exam is over!!!";
  }
  if (csDistance <= 0) {
    document.getElementById('cs').innerHTML = "Exam is over!!!";
  }
  if (ictDistance <= 0) {
    document.getElementById('ict').innerHTML = "Exam is over!!!";
  }
  if (ict2Distance <= 0) {
    document.getElementById('ict').innerHTML = "Exam is over!!!";
  }
  if (chisDistance <= 0) {
    document.getElementById('chis').innerHTML = "Exam is over!!!";
  }
  if (bioDistance <= 0) {
    document.getElementById('bio').innerHTML = "Exam is over!!!";
  }
  if (vaDistance <= 0) {
    document.getElementById('va').innerHTML = "Exam is over!!!";
  }
  if (econ1Distance <= 0) {
    document.getElementById('econ1').innerHTML = "Exam is over!!!";
  }
  if (econ2Distance <= 0) {
    document.getElementById('econ2').innerHTML = "Exam is over!!!";
  }
  if (mus1aDistance <= 0) {
    document.getElementById('mus1a').innerHTML = "Exam is over!!!";
  }
  if (mus1bDistance <= 0) {
    document.getElementById('mus1b').innerHTML = "Exam is over!!!";
  }
  if (histDistance <= 0) {
    document.getElementById('hist').innerHTML = "Exam is over!!!";
  }
  if (hist2Distance <= 0) {
    document.getElementById('hist').innerHTML = "Exam is over!!!";
  }
  if (clit1Distance <= 0) {
    document.getElementById('clit1').innerHTML = "Exam is over!!!";
  }
  if (clit2Distance <= 0) {
    document.getElementById('clit2').innerHTML = "Exam is over!!!";
  }
  if (phyDistance <= 0) {
    document.getElementById('phy').innerHTML = "Exam is over!!!";
  }
  if (geoDistance <= 0) {
    document.getElementById('geo').innerHTML = "Exam is over!!!";
  }
  if (geo2Distance <= 0) {
    document.getElementById('geo').innerHTML = "Exam is over!!!";
  }
  if (mus2Distance <= 0) {
    document.getElementById('mus2').innerHTML = "Exam is over!!!";
  }
  if (e4Distance <= 0) {
    document.getElementById('e4').innerHTML = "Exam is over!!!";
  }
  if (chemDistance <= 0) {
    document.getElementById('chem').innerHTML = "Exam is over!!!";
  }
  if (m2Distance <= 0) {
    document.getElementById('m2').innerHTML = "Exam is over!!!";
  }
}, 1000);