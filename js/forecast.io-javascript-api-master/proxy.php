<?php
// File Name: proxy.php

$api_key = 'a1b36163b4e7aad2687f5d02c8ca8233';

$API_ENDPOINT = 'https://api.forecast.io/forecast/';
$url = $API_ENDPOINT . $api_key . '/';

if(!isset($_GET['url'])) die();
$url = $url . $_GET['url'];
$url = file_get_contents($url);

print_r($url);
