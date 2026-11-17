import { SvelteComponent } from 'svelte';

export interface AtSign3EqualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign3Equal extends SvelteComponent<AtSign3EqualProps> {}
