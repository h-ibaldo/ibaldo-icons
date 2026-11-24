import { SvelteComponent } from 'svelte';

export interface MobileOffNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileOffNotch extends SvelteComponent<MobileOffNotchProps> {}
