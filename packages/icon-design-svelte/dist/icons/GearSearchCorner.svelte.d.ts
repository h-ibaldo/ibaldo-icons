import { SvelteComponent } from 'svelte';

export interface GearSearchCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearSearchCorner extends SvelteComponent<GearSearchCornerProps> {}
