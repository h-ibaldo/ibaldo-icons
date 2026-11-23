import { SvelteComponent } from 'svelte';

export interface MagnetBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MagnetBolt extends SvelteComponent<MagnetBoltProps> {}
