import { SvelteComponent } from 'svelte';

export interface Poll7VerticalUsersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Poll7VerticalUsers extends SvelteComponent<Poll7VerticalUsersProps> {}
