import { SvelteComponent } from 'svelte';

export interface UserSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserSquare extends SvelteComponent<UserSquareProps> {}
