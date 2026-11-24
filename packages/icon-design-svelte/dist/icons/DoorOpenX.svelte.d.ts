import { SvelteComponent } from 'svelte';

export interface DoorOpenXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorOpenX extends SvelteComponent<DoorOpenXProps> {}
