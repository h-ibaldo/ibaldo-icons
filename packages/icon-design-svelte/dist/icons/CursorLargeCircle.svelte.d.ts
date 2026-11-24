import { SvelteComponent } from 'svelte';

export interface CursorLargeCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorLargeCircle extends SvelteComponent<CursorLargeCircleProps> {}
