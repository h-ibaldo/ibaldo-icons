import { SvelteComponent } from 'svelte';

export interface DoorSquareArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorSquareArrowIn extends SvelteComponent<DoorSquareArrowInProps> {}
