import { SvelteComponent } from 'svelte';

export interface GlassesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Glasses extends SvelteComponent<GlassesProps> {}
