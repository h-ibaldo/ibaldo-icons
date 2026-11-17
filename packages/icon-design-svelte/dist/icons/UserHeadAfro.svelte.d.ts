import { SvelteComponent } from 'svelte';

export interface UserHeadAfroProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadAfro extends SvelteComponent<UserHeadAfroProps> {}
