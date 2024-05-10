<?php
$projectName = "QU4R3NTEC";

if (!is_dir($projectName)) {
    mkdir($projectName);
    mkdir($projectName . '/app');
    mkdir($projectName . '/app/models');
    mkdir($projectName . '/app/controllers');
    mkdir($projectName . '/app/views');
    mkdir($projectName . '/public');
    mkdir($projectName . '/public/css');
    mkdir($projectName . '/public/js');
    mkdir($projectName . '/public/img');
    mkdir($projectName . '/config');
    mkdir($projectName . '/sql');
    mkdir($projectName . '/vendor');
    mkdir($projectName . '/Clases');    
}
