import { SvelteComponent } from 'svelte';

export interface ScissorsDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ScissorsDotted extends SvelteComponent<ScissorsDottedProps> {}
