import { SvelteComponent } from 'svelte';

export interface AtSign1EqualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign1Equal extends SvelteComponent<AtSign1EqualProps> {}
