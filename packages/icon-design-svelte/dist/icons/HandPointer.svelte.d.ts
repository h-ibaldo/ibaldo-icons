import { SvelteComponent } from 'svelte';

export interface HandPointerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandPointer extends SvelteComponent<HandPointerProps> {}
