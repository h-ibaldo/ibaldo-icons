import { SvelteComponent } from 'svelte';

export interface CheckDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckDouble extends SvelteComponent<CheckDoubleProps> {}
