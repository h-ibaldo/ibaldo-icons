import { SvelteComponent } from 'svelte';

export interface LupePinLocationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LupePinLocation extends SvelteComponent<LupePinLocationProps> {}
