-- Schema for MyScene MySQL database
CREATE DATABASE IF NOT EXISTS MyScene;
USE MyScene;

DROP TABLE IF EXISTS Artists;
DROP TABLE IF EXISTS Users;

CREATE TABLE Artists (
    id INT PRIMARY KEY AUTO_INCREMENT,
    artist_name VARCHAR(40) NOT NULL,
    location_city VARCHAR(40) NOT NULL,
    location_region VARCHAR(40) NOT NULL,
    longitude FLOAT,
    latitude FLOAT,
    music_genre VARCHAR(20) NOT NULL,
    insta_handle VARCHAR(40),
    image_src VARCHAR(40)
);

CREATE TABLE Users (
    username VARCHAR(20) NOT NULL,
    user_password VARCHAR(20) NOT NULL,

    PRIMARY KEY (username, user_password)
);

-- Test Cases
INSERT INTO Users VALUES ("mrpepsi", "12345");
INSERT INTO Users VALUES ("whisperingcoder", "23456");
INSERT INTO Users VALUES ("lemdog", "34567");
INSERT INTO Users VALUES ("kcudzich", "45678");
INSERT INTO Users VALUES ("kitkat", "56789");
INSERT INTO Users VALUES ("katsu18", "67890");
