import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import 'react-vis/dist/main.scss';

import 'react-vis/dist/style.css'

import {
  CircularGridLines,
  RadialChart,
  VerticalGridLines,
  HorizontalGridLines
} from 'react-vis';

const DATA = [
// {angle:0.00000001, radius: 15, color: 'black', label: 'White Board'}, 
{angle:1, radius: 8.07842332, color: 'blue'}, 
{angle:1, radius: 9.57708889, color: 'blue'}, 
{angle:1, radius: 7.38811332, color: 'blue'}, 
{angle:1, radius: 6.11784028, color: 'blue'}, 
{angle:1, radius: 3.97505646, color: 'blue'}, 
{angle:1, radius: 3.28474646, color: 'blue'}, 
{angle:1, radius: 2.85618969, color: 'blue'}, 
{angle:1, radius: 1.54229111, color: 'blue'}, 
{angle:1, radius: 1.24717717, color: 'blue'}, 
{angle:1, radius: 1.11116814, color: 'blue'}, 
{angle:1, radius: 0.985423938, color: 'blue'}, 
{angle:1, radius: 0.764730035, color: 'blue'}, 
{angle:1, radius: 0.749332786, color: 'blue'}, 
{angle:1, radius: 0.467049887, color: 'blue'}, 
{angle:1, radius: 0.374666393, color: 'blue'}, 
{angle:1, radius: 0.410593307, color: 'blue'}, 
{angle:1, radius: 0.233524944, color: 'blue'}, 
{angle:1, radius: 0.251488401, color: 'blue'}, 
{angle:1, radius: 0.264319442, color: 'blue'}, 
{angle:1, radius: 0.225826319, color: 'blue'}, 
{angle:1, radius: 0.169369739, color: 'blue'}, 
{angle:1, radius: 0.148840074, color: 'blue'}, 
{angle:1, radius: 0.133442825, color: 'blue'}, 
{angle:1, radius: 0.138575241, color: 'blue'}, 
{angle:1, radius: 0.133442825, color: 'blue'}, 
{angle:1, radius: 0.0846848696, color: 'blue'}, 
{angle:1, radius: 0.0769862451, color: 'blue'}, 
{angle:1, radius: 0.0795524533, color: 'blue'}, 
{angle:1, radius: 0.0795524533, color: 'blue'}, 
{angle:1, radius: 0.0513241634, color: 'blue'}, 
{angle:1, radius: 0.0718538288, color: 'blue'}, 
{angle:1, radius: 0.0333607062, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.0359269144, color: 'blue'}, 
{angle:1, radius: 0.0461917471, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0333607062, color: 'blue'}, 
{angle:1, radius: 0.0333607062, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'},
// {angle:0.00001, radius: 15, color:'black', label: 'Door'},
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.0256620817, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0256620817, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.0282282899, color: 'blue'}, 
{angle:1, radius: 0.0436255389, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 

{angle:1, radius: 1e-08, color: 'blue'}, 
// {angle:0.00000001, radius: 15, color: 'black', label: 'Bus Stop'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 1e-08, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0128310409, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00256620817, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.0102648327, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.00769862451, color: 'blue'}, 
{angle:1, radius: 0.00513241634, color: 'blue'}, 
{angle:1, radius: 0.0230958735, color: 'blue'}, 
{angle:1, radius: 0.0359269144, color: 'blue'}, 
{angle:1, radius: 0.0282282899, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.0282282899, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.0256620817, color: 'blue'}, 
{angle:1, radius: 0.015397249, color: 'blue'}, 
{angle:1, radius: 0.0282282899, color: 'blue'}, 
{angle:1, radius: 0.0282282899, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.0179634572, color: 'blue'}, 
{angle:1, radius: 0.0256620817, color: 'blue'}, 
{angle:1, radius: 0.0359269144, color: 'blue'}, 
{angle:1, radius: 0.0205296654, color: 'blue'}, 
{angle:1, radius: 0.0564565798, color: 'blue'}, 
{angle:1, radius: 0.0333607062, color: 'blue'}, 
{angle:1, radius: 0.0538903716, color: 'blue'}, 
{angle:1, radius: 0.0487579552, color: 'blue'}, 
{angle:1, radius: 0.0564565798, color: 'blue'}, 
{angle:1, radius: 0.0333607062, color: 'blue'}, 
{angle:1, radius: 0.0384931226, color: 'blue'}, 
{angle:1, radius: 0.0410593307, color: 'blue'}, 
{angle:1, radius: 0.030794498, color: 'blue'}, 
{angle:1, radius: 0.0821186615, color: 'blue'}, 
{angle:1, radius: 0.100082119, color: 'blue'}, 
{angle:1, radius: 0.0846848696, color: 'blue'}, 
{angle:1, radius: 0.0718538288, color: 'blue'}, 
{angle:1, radius: 0.102648327, color: 'blue'}, 
{angle:1, radius: 0.115479368, color: 'blue'}, 
{angle:1, radius: 0.192465613, color: 'blue'}, 
{angle:1, radius: 0.269451858, color: 'blue'}, 
{angle:1, radius: 0.436255389, color: 'blue'}, 
{angle:1, radius: 0.343871895, color: 'blue'}, 
{angle:1, radius: 0.338739479, color: 'blue'}, 
{angle:1, radius: 0.313077397, color: 'blue'}, 
{angle:1, radius: 0.474748512, color: 'blue'}, 
{angle:1, radius: 0.456785054, color: 'blue'}, 
{angle:1, radius: 0.492711969, color: 'blue'}, 
{angle:1, radius: 1.05984397, color: 'blue'}, 
{angle:1, radius: 1.27797167, color: 'blue'}, 
{angle:1, radius: 1.51919524, color: 'blue'}, 
{angle:1, radius: 1.70909464, color: 'blue'}, 
{angle:1, radius: 2.009341, color: 'blue'}, 
{angle:1, radius: 2.80999795, color: 'blue'}, 
{angle:1, radius: 3.02042702, color: 'blue'}, 
{angle:1, radius: 3.15900226, color: 'blue'}, 
{angle:1, radius: 4.44467255, color: 'blue'}, 
{angle:1, radius: 6.9107986, color: 'blue'}, 
{angle:1, radius: 7.84489838, color: 'blue'}, 
{angle:1, radius: 6.83124615, color: 'blue'},
  // {
  //   angle: 1,
  //   id: 1,
  //   radius: 10
  // },
  // {
  //   angle: 2,
  //   label: 'Super Custom label',
  //   subLabel: 'With annotation',
  //   id: 2,
  //   radius: 20
  // },
  // {
  //   angle: 5,
  //   id: 3,
  //   radius: 5,
  //   label: 'Alt Label'
  // },
  // {
  //   angle: 3,
  //   id: 4,
  //   radius: 14
  // },
  // {
  //   angle: 5,
  //   id: 5,
  //   radius: 12,
  //   subLabel: 'Sub Label only'
  // }
];

function mapData(hoveredSection) {
  return DATA.map((row, index) => {
    return {
      ...row,
      innerRadius: hoveredSection === (index + 1) ? row.radius - 1 : null,
      opacity: (!hoveredSection || hoveredSection === index + 1) ? 1 : 0.6
    };
  });
}

export default class SimpleRadialChart extends Component {
  state = {
    hoveredSection: false
  }

  render() {
    const {hoveredSection} = this.state;
    return (
      <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        data={mapData(hoveredSection)}
        labelsAboveChildren
        onValueMouseOver={row => this.setState({hoveredSection: row.id})}
        onMouseLeave={() => this.setState({hoveredSection: false})}
        width={600}
        height={300} >
        <CircularGridLines tickTotal={20} rRange={[0, 150]}/>
      </RadialChart>
    );
  }
}