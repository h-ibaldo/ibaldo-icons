import { SvelteComponent } from 'svelte';

export interface MobileCartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileCart extends SvelteComponent<MobileCartProps> {}
