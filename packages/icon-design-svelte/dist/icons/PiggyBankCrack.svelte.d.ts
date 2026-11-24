import { SvelteComponent } from 'svelte';

export interface PiggyBankCrackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PiggyBankCrack extends SvelteComponent<PiggyBankCrackProps> {}
