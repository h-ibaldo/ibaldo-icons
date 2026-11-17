import { SvelteComponent } from 'svelte';

export interface UserHeadCurlyTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadCurlyTop extends SvelteComponent<UserHeadCurlyTopProps> {}
