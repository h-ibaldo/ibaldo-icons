import { SvelteComponent } from 'svelte';

export interface AtSign4EqualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4Equal extends SvelteComponent<AtSign4EqualProps> {}
