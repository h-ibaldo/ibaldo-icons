import { SvelteComponent } from 'svelte';

export interface StretchVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StretchVertical extends SvelteComponent<StretchVerticalProps> {}
