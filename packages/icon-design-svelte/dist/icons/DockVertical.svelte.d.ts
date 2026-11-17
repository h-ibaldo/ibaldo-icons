import { SvelteComponent } from 'svelte';

export interface DockVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DockVertical extends SvelteComponent<DockVerticalProps> {}
