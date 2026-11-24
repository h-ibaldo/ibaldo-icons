import { SvelteComponent } from 'svelte';

export interface AlignLeftBarsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AlignLeftBars extends SvelteComponent<AlignLeftBarsProps> {}
