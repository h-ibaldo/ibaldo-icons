import { SvelteComponent } from 'svelte';

export interface AtSign2EqualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign2Equal extends SvelteComponent<AtSign2EqualProps> {}
