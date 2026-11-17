import { SvelteComponent } from 'svelte';

export interface UserHeadSideBangsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadSideBangs extends SvelteComponent<UserHeadSideBangsProps> {}
