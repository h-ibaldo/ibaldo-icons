import { SvelteComponent } from 'svelte';

export interface UserHeadBobBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadBobBangs extends SvelteComponent<UserHeadBobBangsProps> {}
