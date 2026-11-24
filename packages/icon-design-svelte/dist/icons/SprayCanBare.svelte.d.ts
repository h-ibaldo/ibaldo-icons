import { SvelteComponent } from 'svelte';

export interface SprayCanBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SprayCanBare extends SvelteComponent<SprayCanBareProps> {}
