import { SvelteComponent } from 'svelte';

export interface UserFaceLongSideBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongSideBangs extends SvelteComponent<UserFaceLongSideBangsProps> {}
