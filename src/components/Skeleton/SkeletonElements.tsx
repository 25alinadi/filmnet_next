'use client'

import styled, {keyframes} from "styled-components";
import {devices} from "@/utils/constans";

const SkeletonAnimeLoading = keyframes`
  0% {
    opacity: 1;
  }
  50%{
    opacity: .25;
  }
  100% {
    opacity: 1;
  }
`

export const SkeletonUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  opacity: 1;
  transition: opacity .5s ease;
`

export const SkeletonLi = styled.li`
  list-style-type: none;
  list-style-image: none;
  display: inline-block;
  padding-right: 1rem;
  padding-bottom: 1rem;
  min-width: 50%;
  max-width: 50%;

  @media only screen and ${devices.sm} {
    min-width: 25%;
    max-width: 25%;
  }

  @media only screen and ${devices.md} {
    min-width: 16.666666666666668%;
    max-width: 16.666666666666668%;
  }
  
  @media only screen and ${devices.lg} {
    min-width: 12.5%;
    max-width: 12.5%;
  }
`

export const SkeletonDiv = styled.div`
  padding-bottom: 140%;
  display: block;
  border-radius: var(--border-radius-card);
  width: 100%;
  background-color: var(--secondary-color);
  animation: ${SkeletonAnimeLoading} 1s linear infinite;
`

export const SkeletonP = styled.p`
  margin: 0;
  padding-top: 0.5rem;
`

export const SkeletonSpan = styled.span`
  display: block;
  border-radius: 0.5rem;
  width: 5em;
  height: 1em;
  background-color: var(--secondary-color);
  animation: ${SkeletonAnimeLoading} 1s linear infinite;
`