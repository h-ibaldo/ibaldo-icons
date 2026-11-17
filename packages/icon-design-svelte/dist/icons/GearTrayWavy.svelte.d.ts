import { SvelteComponent } from 'svelte';

export interface GearTrayWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GearTrayWavy extends SvelteComponent<GearTrayWavyProps> {}
