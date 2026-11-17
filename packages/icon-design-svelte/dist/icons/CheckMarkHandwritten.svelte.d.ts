import { SvelteComponent } from 'svelte';

export interface CheckMarkHandwrittenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkHandwritten extends SvelteComponent<CheckMarkHandwrittenProps> {}
