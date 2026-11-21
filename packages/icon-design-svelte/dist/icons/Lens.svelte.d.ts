import { SvelteComponent } from 'svelte';

export interface LensProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lens extends SvelteComponent<LensProps> {}
