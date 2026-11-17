import { SvelteComponent } from 'svelte';

export interface DoorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Door extends SvelteComponent<DoorProps> {}
