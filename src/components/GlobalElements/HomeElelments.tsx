'use client'

import styled from "styled-components";
import {devices} from "@/utils/constans";

export const HomeDiv = styled.div`
  padding: 2rem;
  background-color: var(--background-color);
  color: var(--white-color);


  @media only screen and ${devices.md} {
    padding: 2.7rem;
  }

  @media only screen and ${devices.lg} {
    padding: 3.5rem;
  }
`

export const HomeSection = styled.section``