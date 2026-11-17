import { SvelteComponent } from 'svelte';

export interface DoorArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorArrowIn extends SvelteComponent<DoorArrowInProps> {}
