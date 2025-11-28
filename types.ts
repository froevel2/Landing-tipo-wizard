import React from 'react';

export enum Step {
  MOTIVATION = 0,
  BENEFITS = 1,
  COMPARISON = 2,
  DETAILS = 3,
  LOADER = 4,
  OFFER = 5,
  PAYMENT = 6,
}

export enum MotivationType {
  WORK = 'WORK',
  PERSONAL = 'PERSONAL',
}

export interface Benefit {
  icon: React.ReactNode;
  text: string;
}