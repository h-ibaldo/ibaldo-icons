import { SvelteComponent } from 'svelte';

export interface WindowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Window extends SvelteComponent<WindowProps> {}
