import { SvelteComponent } from 'svelte';

export interface DoorOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorOpen extends SvelteComponent<DoorOpenProps> {}
