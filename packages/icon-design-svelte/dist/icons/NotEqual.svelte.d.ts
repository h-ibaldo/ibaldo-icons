import { SvelteComponent } from 'svelte';

export interface NotEqualProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class NotEqual extends SvelteComponent<NotEqualProps> {}
