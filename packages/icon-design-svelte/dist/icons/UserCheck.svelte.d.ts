import { SvelteComponent } from 'svelte';

export interface UserCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserCheck extends SvelteComponent<UserCheckProps> {}
