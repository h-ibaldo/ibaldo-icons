import { SvelteComponent } from 'svelte';

export interface MobilePowerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobilePower extends SvelteComponent<MobilePowerProps> {}
