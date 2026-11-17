import { SvelteComponent } from 'svelte';

export interface UserFaceLongSweptBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongSweptBangs extends SvelteComponent<UserFaceLongSweptBangsProps> {}
