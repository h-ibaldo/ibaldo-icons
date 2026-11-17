import { SvelteComponent } from 'svelte';

export interface UserHeadShortCombedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadShortCombed extends SvelteComponent<UserHeadShortCombedProps> {}
