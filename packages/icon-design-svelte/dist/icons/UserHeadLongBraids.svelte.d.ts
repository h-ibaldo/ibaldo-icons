import { SvelteComponent } from 'svelte';

export interface UserHeadLongBraidsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadLongBraids extends SvelteComponent<UserHeadLongBraidsProps> {}
