import { SvelteComponent } from 'svelte';

export interface DoorOpenArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorOpenArrowOut extends SvelteComponent<DoorOpenArrowOutProps> {}
