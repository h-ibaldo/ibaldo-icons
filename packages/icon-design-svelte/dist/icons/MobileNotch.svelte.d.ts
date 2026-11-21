import { SvelteComponent } from 'svelte';

export interface MobileNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileNotch extends SvelteComponent<MobileNotchProps> {}
