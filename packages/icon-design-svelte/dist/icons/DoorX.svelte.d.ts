import { SvelteComponent } from 'svelte';

export interface DoorXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorX extends SvelteComponent<DoorXProps> {}
