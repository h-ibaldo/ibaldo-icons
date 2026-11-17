import { SvelteComponent } from 'svelte';

export interface WindowCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCode extends SvelteComponent<WindowCodeProps> {}
