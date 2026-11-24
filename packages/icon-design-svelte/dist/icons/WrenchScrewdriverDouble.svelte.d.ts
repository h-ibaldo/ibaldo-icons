import { SvelteComponent } from 'svelte';

export interface WrenchScrewdriverDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WrenchScrewdriverDouble extends SvelteComponent<WrenchScrewdriverDoubleProps> {}
