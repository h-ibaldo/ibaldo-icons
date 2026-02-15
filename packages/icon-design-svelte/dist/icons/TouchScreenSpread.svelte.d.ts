import { SvelteComponent } from 'svelte';

export interface TouchScreenSpreadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSpread extends SvelteComponent<TouchScreenSpreadProps> {}
