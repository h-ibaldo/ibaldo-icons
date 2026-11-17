import { SvelteComponent } from 'svelte';

export interface BoxLidClaspProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxLidClasp extends SvelteComponent<BoxLidClaspProps> {}
