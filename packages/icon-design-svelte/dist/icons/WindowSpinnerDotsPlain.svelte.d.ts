import { SvelteComponent } from 'svelte';

export interface WindowSpinnerDotsPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSpinnerDotsPlain extends SvelteComponent<WindowSpinnerDotsPlainProps> {}
