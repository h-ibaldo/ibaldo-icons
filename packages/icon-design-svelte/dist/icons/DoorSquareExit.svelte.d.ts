import { SvelteComponent } from 'svelte';

export interface DoorSquareExitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorSquareExit extends SvelteComponent<DoorSquareExitProps> {}
