-- Schema for MyScene MySQL database

CREATE DATABASE MyScene;
USE MyScene;

CREATE TABLE Artists (
    id INT PRIMARY KEY,
    artist_name VARCHAR(40) NOT NULL,
    location_city VARCHAR(40) NOT NULL,
    location_region VARCHAR(40) NOT NULL,
    music_genre VARCHAR(20) NOT NULL,
    insta_handle VARCHAR(40),
    image_src VARCHAR(40)
);

CREATE TABLE Users (
    username VARCHAR(10) NOT NULL,
    user_password VARCHAR(20) NOT NULL,

    PRIMARY KEY (username, user_password)
);