import { SvelteComponent } from 'svelte';

export interface AtSign4CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtSign4Check extends SvelteComponent<AtSign4CheckProps> {}
