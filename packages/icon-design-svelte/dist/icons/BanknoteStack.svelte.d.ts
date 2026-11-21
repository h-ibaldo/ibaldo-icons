import { SvelteComponent } from 'svelte';

export interface BanknoteStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanknoteStack extends SvelteComponent<BanknoteStackProps> {}
