import { SvelteComponent } from 'svelte';

export interface WindowLetterWProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLetterW extends SvelteComponent<WindowLetterWProps> {}
