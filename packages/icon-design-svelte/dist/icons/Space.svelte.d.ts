import { SvelteComponent } from 'svelte';

export interface SpaceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Space extends SvelteComponent<SpaceProps> {}
