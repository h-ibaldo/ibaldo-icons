import { SvelteComponent } from 'svelte';

export interface ScrewdriverThickProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScrewdriverThick extends SvelteComponent<ScrewdriverThickProps> {}
