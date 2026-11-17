import { SvelteComponent } from 'svelte';

export interface UserHeadShortFringeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadShortFringe extends SvelteComponent<UserHeadShortFringeProps> {}
