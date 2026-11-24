import { SvelteComponent } from 'svelte';

export interface UserArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowRight extends SvelteComponent<UserArrowRightProps> {}
