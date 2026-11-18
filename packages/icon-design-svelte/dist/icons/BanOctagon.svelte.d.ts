import { SvelteComponent } from 'svelte';

export interface BanOctagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BanOctagon extends SvelteComponent<BanOctagonProps> {}
