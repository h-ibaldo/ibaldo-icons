import { SvelteComponent } from 'svelte';

export interface SpinnerRaysDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SpinnerRaysDotted extends SvelteComponent<SpinnerRaysDottedProps> {}
