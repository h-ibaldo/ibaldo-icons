import { SvelteComponent } from 'svelte';

export interface CheckMarkSolidHandwrittenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckMarkSolidHandwritten extends SvelteComponent<CheckMarkSolidHandwrittenProps> {}
