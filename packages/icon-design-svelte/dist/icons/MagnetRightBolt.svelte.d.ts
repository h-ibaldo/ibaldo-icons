import { SvelteComponent } from 'svelte';

export interface MagnetRightBoltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MagnetRightBolt extends SvelteComponent<MagnetRightBoltProps> {}
