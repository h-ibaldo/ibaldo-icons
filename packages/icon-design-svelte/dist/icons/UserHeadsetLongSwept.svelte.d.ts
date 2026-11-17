import { SvelteComponent } from 'svelte';

export interface UserHeadsetLongSweptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadsetLongSwept extends SvelteComponent<UserHeadsetLongSweptProps> {}
