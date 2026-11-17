import { SvelteComponent } from 'svelte';

export interface UserFaceFlatTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceFlatTop extends SvelteComponent<UserFaceFlatTopProps> {}
