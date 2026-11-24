import { SvelteComponent } from 'svelte';

export interface UserThreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserThree extends SvelteComponent<UserThreeProps> {}
