import { SvelteComponent } from 'svelte';

export interface UserCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserCircle extends SvelteComponent<UserCircleProps> {}
