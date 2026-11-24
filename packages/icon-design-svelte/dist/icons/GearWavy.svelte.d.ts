import { SvelteComponent } from 'svelte';

export interface GearWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearWavy extends SvelteComponent<GearWavyProps> {}
