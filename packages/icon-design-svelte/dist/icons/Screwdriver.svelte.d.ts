import { SvelteComponent } from 'svelte';

export interface ScrewdriverProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Screwdriver extends SvelteComponent<ScrewdriverProps> {}
