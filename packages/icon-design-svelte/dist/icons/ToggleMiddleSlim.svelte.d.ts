import { SvelteComponent } from 'svelte';

export interface ToggleMiddleSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ToggleMiddleSlim extends SvelteComponent<ToggleMiddleSlimProps> {}
