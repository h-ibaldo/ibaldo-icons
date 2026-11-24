import { SvelteComponent } from 'svelte';

export interface UserStarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserStar extends SvelteComponent<UserStarProps> {}
