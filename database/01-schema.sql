DROP DATABASE IF EXISTS carfinder;

CREATE DATABASE carfinder;

\c carfinder

CREATE TABLE public.makes
(
    id integer NOT NULL,
    name character varying NOT NULL,
    PRIMARY KEY (id)
);

ALTER TABLE public.makes
    OWNER to admin;