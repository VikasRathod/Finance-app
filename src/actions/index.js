import { WITHDRAW_AMOUNT, DEPOSIT_AMOUNT, RESET_AMOUNT } from './types';

export const withdrawAmount = (payload) => ({
  type: WITHDRAW_AMOUNT,
  payload: payload.payload
});

export const depositAmount = (payload) => ({
  type: DEPOSIT_AMOUNT,
  payload: payload.payload
});

export const resetAmount = (payload) => ({
  type: RESET_AMOUNT,
  payload: payload.payload
});