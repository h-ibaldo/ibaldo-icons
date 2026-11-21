import { SvelteComponent } from 'svelte';

export interface MobileRingNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileRingNotch extends SvelteComponent<MobileRingNotchProps> {}
