import { SvelteComponent } from 'svelte';

export interface LayoutListLinesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutListLines extends SvelteComponent<LayoutListLinesProps> {}
