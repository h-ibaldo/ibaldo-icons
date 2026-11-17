import { SvelteComponent } from 'svelte';

export interface Poll7UsersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll7Users extends SvelteComponent<Poll7UsersProps> {}
