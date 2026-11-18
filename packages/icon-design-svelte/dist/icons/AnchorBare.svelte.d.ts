import { SvelteComponent } from 'svelte';

export interface AnchorBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnchorBare extends SvelteComponent<AnchorBareProps> {}
