import React, { Component } from 'react';

function formatDate(date) {
	var dayMonth = date.getDate()+"";
	(dayMonth.length<2) && (dayMonth = "0"+dayMonth);
	var month = date.getMonth()+"";
	(month.length<2) && (month = "0"+month);
	var year = date.getFullYear()+"";
	var hours = date.getHours()+"";
	(hours.length<2) && (hours = "0"+hours);
	var min = date.getMinutes()+"";
	(min.length<2) && (min = "0"+min);

	return `${hours}:${min} ${dayMonth}.${month}.${year}`;
}

export {formatDate};

function parseString(str) {
	str=str.split("");
	for(let i = 0; i<str.length; i++) {
		if(str[i].charCodeAt(0)==10) str[i]=<br key={i}/>;
		else str[i]=<span key={i}>{str[i]}</span>
	}
	return str;
}

export {parseString};