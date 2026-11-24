import { SvelteComponent } from 'svelte';

export interface UserHeadsetLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadsetLong extends SvelteComponent<UserHeadsetLongProps> {}
