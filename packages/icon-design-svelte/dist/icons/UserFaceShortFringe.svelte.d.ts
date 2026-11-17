import { SvelteComponent } from 'svelte';

export interface UserFaceShortFringeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceShortFringe extends SvelteComponent<UserFaceShortFringeProps> {}
