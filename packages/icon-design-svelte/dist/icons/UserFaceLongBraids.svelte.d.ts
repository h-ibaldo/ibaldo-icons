import { SvelteComponent } from 'svelte';

export interface UserFaceLongBraidsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongBraids extends SvelteComponent<UserFaceLongBraidsProps> {}
