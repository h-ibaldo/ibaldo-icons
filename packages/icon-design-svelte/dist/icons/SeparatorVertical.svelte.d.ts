import { SvelteComponent } from 'svelte';

export interface SeparatorVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SeparatorVertical extends SvelteComponent<SeparatorVerticalProps> {}
