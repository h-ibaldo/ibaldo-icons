import { SvelteComponent } from 'svelte';

export interface ToggleMiddleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleMiddle extends SvelteComponent<ToggleMiddleProps> {}
