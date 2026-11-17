import { SvelteComponent } from 'svelte';

export interface LayoutGridLabelsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutGridLabels extends SvelteComponent<LayoutGridLabelsProps> {}
