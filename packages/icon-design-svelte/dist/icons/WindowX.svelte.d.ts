import { SvelteComponent } from 'svelte';

export interface WindowXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowX extends SvelteComponent<WindowXProps> {}
