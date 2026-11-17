import { SvelteComponent } from 'svelte';

export interface CheckBoldHandwrittenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckBoldHandwritten extends SvelteComponent<CheckBoldHandwrittenProps> {}
