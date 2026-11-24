import { SvelteComponent } from 'svelte';

export interface DoorArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorArrowOut extends SvelteComponent<DoorArrowOutProps> {}
