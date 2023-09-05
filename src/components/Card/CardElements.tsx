'use client'

import styled from "styled-components";
import {devices} from "@/utils/constans";
import placeholder from "@/public/images/placeholder.svg"

const commonCardStyles = `
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--white-color);

  @media only screen and ${devices.md} {
    font-size: 0.8rem;
  }

  @media only screen and ${devices.lg} {
    font-size: 0.875rem;
  }
`;

export const CardUl = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  opacity: 1;
  transition: opacity .5s ease;
`

export const CardLi = styled.li`
  min-width: 50%;
  max-width: 50%;
  display: inline-block;
  list-style-type: none;
  list-style-image: none;
  padding-right: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

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

export const CardDiv = styled.div``

export const CardLink = styled.a`
  display: block;
  position: relative;
  background-size: cover;
  background: url(${placeholder?.src}) no-repeat center;
  background-color: var(--secondary-color);
  color: var(--white-color);
  line-height: 1.6;
  padding-bottom: 140%;
  border-radius: var(--border-radius-card);
  overflow: hidden;
  min-width: 6rem;
`

export const CardTitle = styled.div`
  line-height: 1;
  max-width: 100%;
  margin: 0;
  padding-top: 0.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${commonCardStyles}
`

export const CardImg = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--hover-color);
  color: var(--white-color);
  opacity: 0;
  padding: 0.5rem;
  transition: opacity .3s ease;

  ${CardLink}:hover & {
    opacity: 1;
  }
`

export const CardContentList = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`

export const CardContentTxt = styled.p`
  margin: 0;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  ${commonCardStyles}
`

export const CardContentImdbDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-radius: 0.25rem;
  font-weight: 900;
  padding: 0.25em 0 0;
  margin-top: 1rem;
  ${commonCardStyles}

  span:nth-child(1) svg {
    margin-left: 0.5rem;
  }
`