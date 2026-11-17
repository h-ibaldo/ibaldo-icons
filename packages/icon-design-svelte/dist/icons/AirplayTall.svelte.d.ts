import { SvelteComponent } from 'svelte';

export interface AirplayTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplayTall extends SvelteComponent<AirplayTallProps> {}
