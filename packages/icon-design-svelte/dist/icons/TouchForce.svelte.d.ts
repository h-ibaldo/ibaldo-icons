import { SvelteComponent } from 'svelte';

export interface TouchForceProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchForce extends SvelteComponent<TouchForceProps> {}
