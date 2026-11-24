import { SvelteComponent } from 'svelte';

export interface MobileBoltNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileBoltNotch extends SvelteComponent<MobileBoltNotchProps> {}
