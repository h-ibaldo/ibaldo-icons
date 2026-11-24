import { SvelteComponent } from 'svelte';

export interface GearProgressProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearProgress extends SvelteComponent<GearProgressProps> {}
