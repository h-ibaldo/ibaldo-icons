import { SvelteComponent } from 'svelte';

export interface WindowLetterXBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLetterXBare extends SvelteComponent<WindowLetterXBareProps> {}
