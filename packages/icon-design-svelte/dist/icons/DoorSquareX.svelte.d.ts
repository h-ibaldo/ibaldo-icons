import { SvelteComponent } from 'svelte';

export interface DoorSquareXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorSquareX extends SvelteComponent<DoorSquareXProps> {}
