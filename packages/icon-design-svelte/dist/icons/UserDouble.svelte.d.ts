import { SvelteComponent } from 'svelte';

export interface UserDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserDouble extends SvelteComponent<UserDoubleProps> {}
