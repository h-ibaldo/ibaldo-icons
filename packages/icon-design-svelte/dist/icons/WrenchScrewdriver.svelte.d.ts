import { SvelteComponent } from 'svelte';

export interface WrenchScrewdriverProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WrenchScrewdriver extends SvelteComponent<WrenchScrewdriverProps> {}
