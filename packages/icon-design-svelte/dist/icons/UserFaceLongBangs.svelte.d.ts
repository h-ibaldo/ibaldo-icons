import { SvelteComponent } from 'svelte';

export interface UserFaceLongBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongBangs extends SvelteComponent<UserFaceLongBangsProps> {}
