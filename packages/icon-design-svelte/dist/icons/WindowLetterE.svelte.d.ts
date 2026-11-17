import { SvelteComponent } from 'svelte';

export interface WindowLetterEProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLetterE extends SvelteComponent<WindowLetterEProps> {}
