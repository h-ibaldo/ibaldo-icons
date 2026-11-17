import { SvelteComponent } from 'svelte';

export interface DoorArrowOutBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorArrowOutBare extends SvelteComponent<DoorArrowOutBareProps> {}
