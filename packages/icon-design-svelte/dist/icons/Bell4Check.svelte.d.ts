import { SvelteComponent } from 'svelte';

export interface Bell4CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell4Check extends SvelteComponent<Bell4CheckProps> {}
