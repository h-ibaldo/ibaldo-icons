import { SvelteComponent } from 'svelte';

export interface EjectDownSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class EjectDownSquare extends SvelteComponent<EjectDownSquareProps> {}
