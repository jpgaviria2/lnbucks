
export type LoginMethod = 'nostr' | 'lightning';

export interface User {
  identifier: string;
  loginMethod: LoginMethod;
  points: number;
  password?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  pointCost: number;
  imageUrl: string;
}

export enum TransactionType {
  EARN = 'EARN',
  REDEEM = 'REDEEM',
  CASHOUT = 'CASHOUT',
}

export interface Transaction {
  id: number;
  type: TransactionType;
  description: string;
  points: number;
  date: string;
}

// Admin Panel Types
export interface NostrRelay {
  id: string;
  url: string;
  status: 'active' | 'inactive';
}

export interface LightningNode {
  id: string;
  type: 'LND' | 'Core Lightning' | 'Alby Hub' | 'Strike';
  address: string;
  status: 'connected' | 'disconnected';
  apiKey?: string;
}

export interface CashuMint {
  id: string;
  url: string;
  status: 'active' | 'testing';
}

export interface AdminConfig {
  nostrRelays: NostrRelay[];
  lightningNodes: LightningNode[];
  cashuMints: CashuMint[];
}