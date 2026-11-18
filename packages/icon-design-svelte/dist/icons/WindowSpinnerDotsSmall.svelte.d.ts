import { SvelteComponent } from 'svelte';

export interface WindowSpinnerDotsSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSpinnerDotsSmall extends SvelteComponent<WindowSpinnerDotsSmallProps> {}
