import { SvelteComponent } from 'svelte';

export interface UserFaceShortCombedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceShortCombed extends SvelteComponent<UserFaceShortCombedProps> {}
