import { SvelteComponent } from 'svelte';

export interface GearProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gear extends SvelteComponent<GearProps> {}
