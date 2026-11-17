import { SvelteComponent } from 'svelte';

export interface DoorSquareArrowOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorSquareArrowOut extends SvelteComponent<DoorSquareArrowOutProps> {}
