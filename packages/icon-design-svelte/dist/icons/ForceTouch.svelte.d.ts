import { SvelteComponent } from 'svelte';

export interface ForceTouchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ForceTouch extends SvelteComponent<ForceTouchProps> {}
