import { SvelteComponent } from 'svelte';

export interface UserHeadSweptBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadSweptBangs extends SvelteComponent<UserHeadSweptBangsProps> {}
