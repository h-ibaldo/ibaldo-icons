import { SvelteComponent } from 'svelte';

export interface MobilePowerNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobilePowerNotch extends SvelteComponent<MobilePowerNotchProps> {}
