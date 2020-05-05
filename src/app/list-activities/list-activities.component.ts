import { Component } from '@angular/core';
import { Activity } from '~/models/activity.model';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';
import { RadListView, LoadOnDemandListViewEventData } from 'nativescript-ui-listview';
import { Observable } from 'tns-core-modules/ui/page/page';

let LIST_ARRAY_ACTIVITIES: Activity[] = JSON.parse(`[
	{
		"id": 66,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://tucasamihotel.com/wp-content/uploads/2020/01/afiche-festival-2020-HD.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2089-05-31 00:24:58",
		"dateEnd": "1974-12-13 07:09:30",
		"state": "D",
		"idUbicación": 96
	},
	{
		"id": 15,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "2043-05-06 20:51:43",
		"dateEnd": "2055-08-26 18:20:20",
		"state": "C",
		"idUbicación": 70
	},
	{
		"id": 0,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "1912-03-19 10:30:28",
		"dateEnd": "1951-05-16 16:02:56",
		"state": "C",
		"idUbicación": 33
	},
	{
		"id": 69,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "1944-11-17 02:55:19",
		"dateEnd": "1929-06-29 15:22:49",
		"state": "F",
		"idUbicación": 17
	},
	{
		"id": 89,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "1989-05-26 01:29:46",
		"dateEnd": "2054-05-15 05:39:09",
		"state": "F",
		"idUbicación": 88
	},
	{
		"id": 24,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "1975-12-19 21:19:34",
		"dateEnd": "2020-01-15 19:22:35",
		"state": "D",
		"idUbicación": 60
	},
	{
		"id": 74,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "2072-03-24 16:56:30",
		"dateEnd": "1971-07-18 06:14:38",
		"state": "C",
		"idUbicación": 65
	},
	{
		"id": 0,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "1900-09-06 22:39:25",
		"dateEnd": "1939-06-01 05:28:55",
		"state": "C",
		"idUbicación": 18
	},
	{
		"id": 60,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "2070-06-28 12:16:11",
		"dateEnd": "2063-06-02 21:49:29",
		"state": "D",
		"idUbicación": 83
	},
	{
		"id": 82,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2000-05-13 15:39:57",
		"dateEnd": "1992-10-23 14:17:53",
		"state": "F",
		"idUbicación": 61
	},
	{
		"id": 30,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "1985-01-15 22:02:59",
		"dateEnd": "2002-03-31 03:31:45",
		"state": "C",
		"idUbicación": 47
	},
	{
		"id": 4,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "1943-11-28 21:54:33",
		"dateEnd": "1937-01-07 09:53:29",
		"state": "F",
		"idUbicación": 67
	},
	{
		"id": 25,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "1961-09-08 15:52:01",
		"dateEnd": "2078-12-10 05:59:32",
		"state": "D",
		"idUbicación": 19
	},
	{
		"id": 60,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2083-04-24 22:16:58",
		"dateEnd": "1997-04-25 19:00:08",
		"state": "F",
		"idUbicación": 16
	},
	{
		"id": 8,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "1924-03-14 23:20:58",
		"dateEnd": "1904-02-22 20:46:50",
		"state": "D",
		"idUbicación": 28
	},
	{
		"id": 78,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "2057-10-24 01:20:58",
		"dateEnd": "1922-10-07 08:50:49",
		"state": "D",
		"idUbicación": 78
	},
	{
		"id": 29,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2098-03-13 00:28:27",
		"dateEnd": "1993-06-19 09:43:17",
		"state": "F",
		"idUbicación": 85
	},
	{
		"id": 13,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "2045-05-12 22:12:43",
		"dateEnd": "1968-04-11 12:21:29",
		"state": "F",
		"idUbicación": 62
	},
	{
		"id": 71,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "2061-03-30 21:51:10",
		"dateEnd": "2089-02-13 03:07:04",
		"state": "F",
		"idUbicación": 37
	},
	{
		"id": 87,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2092-08-29 04:44:42",
		"dateEnd": "1924-04-17 16:20:21",
		"state": "D",
		"idUbicación": 31
	},
	{
		"id": 98,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "2046-09-09 08:06:22",
		"dateEnd": "1944-05-22 10:10:53",
		"state": "C",
		"idUbicación": 42
	},
	{
		"id": 86,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2097-09-04 10:45:35",
		"dateEnd": "2038-04-03 19:09:27",
		"state": "F",
		"idUbicación": 71
	},
	{
		"id": 63,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "1933-03-01 19:29:21",
		"dateEnd": "1950-12-18 08:37:07",
		"state": "F",
		"idUbicación": 95
	},
	{
		"id": 9,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "1968-10-13 00:13:29",
		"dateEnd": "2041-06-29 03:16:11",
		"state": "F",
		"idUbicación": 11
	},
	{
		"id": 18,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2013-09-14 09:31:39",
		"dateEnd": "2078-02-05 16:31:10",
		"state": "D",
		"idUbicación": 60
	},
	{
		"id": 88,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "1975-11-12 19:17:55",
		"dateEnd": "1943-02-12 13:25:03",
		"state": "C",
		"idUbicación": 45
	},
	{
		"id": 51,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "1909-10-28 21:37:39",
		"dateEnd": "2074-11-03 02:06:32",
		"state": "D",
		"idUbicación": 6
	},
	{
		"id": 11,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "1982-12-16 18:01:20",
		"dateEnd": "2058-04-22 17:24:46",
		"state": "C",
		"idUbicación": 61
	},
	{
		"id": 65,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "1941-06-28 11:34:41",
		"dateEnd": "2045-06-29 23:56:41",
		"state": "D",
		"idUbicación": 96
	},
	{
		"id": 4,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "1919-10-26 15:30:04",
		"dateEnd": "1973-06-29 06:30:33",
		"state": "F",
		"idUbicación": 83
	},
	{
		"id": 6,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "1900-02-13 01:08:14",
		"dateEnd": "1925-07-25 17:19:47",
		"state": "C",
		"idUbicación": 35
	},
	{
		"id": 89,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "1947-04-16 03:23:49",
		"dateEnd": "2015-02-04 16:16:04",
		"state": "D",
		"idUbicación": 58
	},
	{
		"id": 21,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "2099-10-28 16:02:17",
		"dateEnd": "2050-07-31 04:23:40",
		"state": "D",
		"idUbicación": 31
	},
	{
		"id": 27,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2088-09-20 19:04:01",
		"dateEnd": "1995-11-06 01:23:46",
		"state": "D",
		"idUbicación": 45
	},
	{
		"id": 21,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "2078-09-20 03:37:33",
		"dateEnd": "1950-11-06 19:58:59",
		"state": "F",
		"idUbicación": 15
	},
	{
		"id": 12,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "1929-05-25 12:44:51",
		"dateEnd": "1988-01-02 12:21:46",
		"state": "C",
		"idUbicación": 80
	},
	{
		"id": 9,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "2092-04-21 01:28:12",
		"dateEnd": "2000-12-09 07:50:01",
		"state": "C",
		"idUbicación": 70
	},
	{
		"id": 83,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg"
		],
		"dateStart": "2062-07-02 19:49:33",
		"dateEnd": "2085-02-08 20:49:20",
		"state": "C",
		"idUbicación": 58
	},
	{
		"id": 6,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "1983-12-06 09:15:54",
		"dateEnd": "2009-01-22 00:16:46",
		"state": "F",
		"idUbicación": 94
	},
	{
		"id": 97,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "1948-10-16 20:49:07",
		"dateEnd": "1945-06-08 12:58:40",
		"state": "D",
		"idUbicación": 16
	},
	{
		"id": 83,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "2077-12-04 12:11:21",
		"dateEnd": "2053-04-21 11:08:24",
		"state": "D",
		"idUbicación": 71
	},
	{
		"id": 85,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "1966-09-01 01:34:58",
		"dateEnd": "1944-09-01 07:09:46",
		"state": "F",
		"idUbicación": 87
	},
	{
		"id": 7,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "1934-02-26 06:33:27",
		"dateEnd": "2029-11-12 23:03:58",
		"state": "D",
		"idUbicación": 56
	},
	{
		"id": 53,
		"title": "plaza mayor de bogotá",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "1901-08-13 05:37:22",
		"dateEnd": "2043-11-14 17:43:45",
		"state": "F",
		"idUbicación": 84
	},
	{
		"id": 53,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "2079-04-13 05:56:46",
		"dateEnd": "1980-06-21 10:08:50",
		"state": "F",
		"idUbicación": 65
	},
	{
		"id": 6,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://www.elheraldo.co/sites/default/files/articulo/2019/05/12/3b_valledupar.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "2078-10-19 04:58:10",
		"dateEnd": "1900-12-08 05:33:19",
		"state": "F",
		"idUbicación": 74
	},
	{
		"id": 41,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1"
		],
		"dateStart": "2087-08-11 19:13:21",
		"dateEnd": "1902-04-01 08:15:40",
		"state": "F",
		"idUbicación": 60
	},
	{
		"id": 31,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg"
		],
		"dateStart": "2065-10-11 09:42:55",
		"dateEnd": "2079-03-19 11:08:27",
		"state": "F",
		"idUbicación": 44
	},
	{
		"id": 25,
		"title": "mariconetti",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://www.blogvallenato.com/wp-content/uploads/2017/04/glorieta-los-juglares-valledupar-660x330.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg"
		],
		"dateStart": "2044-08-22 14:18:55",
		"dateEnd": "2037-05-05 03:12:16",
		"state": "D",
		"idUbicación": 59
	},
	{
		"id": 14,
		"title": "festival",
		"description": "enum lorem ipsum dolor",
		"images": [
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://id.presidencia.gov.co/Galeria_Fotografica/191030-Unesco-Valledupar-Red-Ciudades-Creativas-1800.jpg",
			"https://i2.wp.com/www.midiario.co/wp-content/uploads/2018/04/IMG-20180428-WA0001.jpg?resize=800%2C445&ssl=1",
			"https://boom82.com/wp-content/uploads/2019/05/ganadores-piloneras-mayores-1024x683.jpg"
		],
		"dateStart": "2032-11-24 10:50:03",
		"dateEnd": "2089-06-25 15:18:57",
		"state": "F",
		"idUbicación": 2
	}
]`);

@Component({
	selector: 'ns-list-activities',
	templateUrl: './list-activities.component.html',
	styleUrls: ['./list-activities.component.css']
})

export class ListActivitiesComponent extends Observable{
	
	private _sourceDataItems = new ObservableArray<Activity>();

	constructor() { 
		super();
		this.dataItems = new ObservableArray<Activity>();
		this._sourceDataItems.push(LIST_ARRAY_ACTIVITIES);
		this.addMoreItemsFromSource(5, null);
	} 
	

	get dataItems(): ObservableArray<Activity> {
		return this.get("_dataItems");
	}

	set dataItems(value: ObservableArray<Activity>) {
		this.set("_dataItems", value);
	}

	public addMoreItemsFromSource(chunkSize: number, listView: RadListView) {

		let newItems = this._sourceDataItems.splice(0, chunkSize);
		this.dataItems.push(newItems);

		if (listView) {
			// Call the optimized function for on-demand loading finished.
			// (with 0 because the ObservableArray has already
			// notified about the inserted items)
			listView.notifyAppendItemsOnDemandFinished(0, this._sourceDataItems.length === 0);
		}
	}

	public onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
		const that = new WeakRef(this);
		const listView: RadListView = args.object;
		if (this._sourceDataItems.length > 0) {
			setTimeout(function () {
				that.get().addMoreItemsFromSource(5, listView);
			}, 0);
			args.returnValue = true;
		} else {
			args.returnValue = false;
			listView.notifyAppendItemsOnDemandFinished(0, true);
		}
	}
}
