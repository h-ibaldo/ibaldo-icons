import { SvelteComponent } from 'svelte';

export interface AtSign5EqualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign5Equal extends SvelteComponent<AtSign5EqualProps> {}
