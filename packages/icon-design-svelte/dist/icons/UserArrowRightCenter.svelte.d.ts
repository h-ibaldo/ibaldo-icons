import { SvelteComponent } from 'svelte';

export interface UserArrowRightCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowRightCenter extends SvelteComponent<UserArrowRightCenterProps> {}
