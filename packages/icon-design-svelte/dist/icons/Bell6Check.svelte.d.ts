import { SvelteComponent } from 'svelte';

export interface Bell6CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell6Check extends SvelteComponent<Bell6CheckProps> {}
