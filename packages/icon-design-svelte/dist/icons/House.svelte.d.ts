import { SvelteComponent } from 'svelte';

export interface HouseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House extends SvelteComponent<HouseProps> {}
