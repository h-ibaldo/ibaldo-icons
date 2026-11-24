import { SvelteComponent } from 'svelte';

export interface MobilePlaneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobilePlane extends SvelteComponent<MobilePlaneProps> {}
