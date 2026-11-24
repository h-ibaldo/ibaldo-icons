import { SvelteComponent } from 'svelte';

export interface WindowPdfBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPdfBare extends SvelteComponent<WindowPdfBareProps> {}
