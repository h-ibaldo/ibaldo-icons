import { SvelteComponent } from 'svelte';

export interface BoxOpenSpreadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxOpenSpread extends SvelteComponent<BoxOpenSpreadProps> {}
