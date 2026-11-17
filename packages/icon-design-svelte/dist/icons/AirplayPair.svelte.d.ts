import { SvelteComponent } from 'svelte';

export interface AirplayPairProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplayPair extends SvelteComponent<AirplayPairProps> {}
