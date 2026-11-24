import { SvelteComponent } from 'svelte';

export interface EraserBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EraserBare extends SvelteComponent<EraserBareProps> {}
