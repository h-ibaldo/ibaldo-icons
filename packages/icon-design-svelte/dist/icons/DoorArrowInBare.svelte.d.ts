import { SvelteComponent } from 'svelte';

export interface DoorArrowInBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorArrowInBare extends SvelteComponent<DoorArrowInBareProps> {}
