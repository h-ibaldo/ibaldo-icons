import { SvelteComponent } from 'svelte';

export interface CheckTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CheckTall extends SvelteComponent<CheckTallProps> {}
