import { SvelteComponent } from 'svelte';

export interface DoorBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorBare extends SvelteComponent<DoorBareProps> {}
