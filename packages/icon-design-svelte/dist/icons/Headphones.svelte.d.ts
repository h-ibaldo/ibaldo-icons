import { SvelteComponent } from 'svelte';

export interface HeadphonesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Headphones extends SvelteComponent<HeadphonesProps> {}
