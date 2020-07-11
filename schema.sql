--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: banner; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.banner (
    id bigint NOT NULL,
    campaign_id bigint NOT NULL,
    title character varying(100) NOT NULL,
    description character varying NOT NULL,
    category character(40) NOT NULL,
    location character(40) NOT NULL,
    product_we_love boolean DEFAULT false NOT NULL,
    video_url character varying(160) NOT NULL,
    amount_pledged numeric(11,0) DEFAULT 0 NOT NULL,
    pledge_goal numeric(11,0) DEFAULT 5000 NOT NULL,
    backers integer DEFAULT 0 NOT NULL,
    end_date timestamp with time zone NOT NULL
);


ALTER TABLE public.banner OWNER TO postgres;

--
-- Name: banner_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.banner ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.banner_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: banner banner_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banner
    ADD CONSTRAINT banner_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

