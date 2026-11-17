import { SvelteComponent } from 'svelte';

export interface DoorXBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorXBare extends SvelteComponent<DoorXBareProps> {}
