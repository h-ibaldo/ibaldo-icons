import { SvelteComponent } from 'svelte';

export interface WindowLetterXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLetterX extends SvelteComponent<WindowLetterXProps> {}
