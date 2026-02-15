import { SvelteComponent } from 'svelte';

export interface TouchScreenPinchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenPinch extends SvelteComponent<TouchScreenPinchProps> {}
