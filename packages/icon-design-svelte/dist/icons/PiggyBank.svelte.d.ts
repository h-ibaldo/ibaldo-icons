import { SvelteComponent } from 'svelte';

export interface PiggyBankProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PiggyBank extends SvelteComponent<PiggyBankProps> {}
