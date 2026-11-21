import { SvelteComponent } from 'svelte';

export interface MobileOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileOff extends SvelteComponent<MobileOffProps> {}
