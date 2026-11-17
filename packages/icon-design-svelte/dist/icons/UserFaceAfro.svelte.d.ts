import { SvelteComponent } from 'svelte';

export interface UserFaceAfroProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceAfro extends SvelteComponent<UserFaceAfroProps> {}
