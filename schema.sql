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
-- Name: banners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.banners (
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


ALTER TABLE public.banners OWNER TO postgres;

--
-- Name: banners_campaign_id_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX banners_campaign_id_idx ON public.banners USING hash (campaign_id);


--
-- PostgreSQL database dump complete
--

