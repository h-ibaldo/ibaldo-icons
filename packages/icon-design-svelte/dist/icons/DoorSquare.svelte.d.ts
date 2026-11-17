import { SvelteComponent } from 'svelte';

export interface DoorSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorSquare extends SvelteComponent<DoorSquareProps> {}
