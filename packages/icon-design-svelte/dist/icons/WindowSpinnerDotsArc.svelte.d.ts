import { SvelteComponent } from 'svelte';

export interface WindowSpinnerDotsArcProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSpinnerDotsArc extends SvelteComponent<WindowSpinnerDotsArcProps> {}
