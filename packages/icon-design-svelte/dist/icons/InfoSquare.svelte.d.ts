import { SvelteComponent } from 'svelte';

export interface InfoSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoSquare extends SvelteComponent<InfoSquareProps> {}
