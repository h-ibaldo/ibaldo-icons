import { SvelteComponent } from 'svelte';

export interface EraserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Eraser extends SvelteComponent<EraserProps> {}
