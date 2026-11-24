import { SvelteComponent } from 'svelte';

export interface SirenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Siren extends SvelteComponent<SirenProps> {}
