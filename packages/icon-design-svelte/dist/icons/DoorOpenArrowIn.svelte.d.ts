import { SvelteComponent } from 'svelte';

export interface DoorOpenArrowInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DoorOpenArrowIn extends SvelteComponent<DoorOpenArrowInProps> {}
