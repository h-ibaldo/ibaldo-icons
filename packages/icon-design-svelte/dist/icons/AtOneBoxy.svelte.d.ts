import { SvelteComponent } from 'svelte';

export interface AtOneBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtOneBoxy extends SvelteComponent<AtOneBoxyProps> {}
