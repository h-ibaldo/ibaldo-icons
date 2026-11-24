import { SvelteComponent } from 'svelte';

export interface HandThumbUpFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandThumbUpFingers extends SvelteComponent<HandThumbUpFingersProps> {}
