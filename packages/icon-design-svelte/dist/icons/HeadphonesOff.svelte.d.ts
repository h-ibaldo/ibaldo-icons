import { SvelteComponent } from 'svelte';

export interface HeadphonesOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeadphonesOff extends SvelteComponent<HeadphonesOffProps> {}
