import { SvelteComponent } from 'svelte';

export interface UserClockProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserClock extends SvelteComponent<UserClockProps> {}
