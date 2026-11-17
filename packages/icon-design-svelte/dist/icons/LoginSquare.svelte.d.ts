import { SvelteComponent } from 'svelte';

export interface LoginSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LoginSquare extends SvelteComponent<LoginSquareProps> {}
