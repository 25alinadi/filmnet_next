'use client'

import styled from "styled-components";

export const SkeletonLi = styled.li`
  display: block;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-card);
  overflow: hidden;
  min-width: 12.5%;
  max-width: 12.5%;
  width: 100%;
  height: 1rem;
  background-color: var(--secondary-color);
  animation: animation-yuheez 1s linear infinite;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`