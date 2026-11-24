import { SvelteComponent } from 'svelte';

export interface TouchPinchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchPinch extends SvelteComponent<TouchPinchProps> {}
