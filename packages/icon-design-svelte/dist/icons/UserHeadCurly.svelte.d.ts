import { SvelteComponent } from 'svelte';

export interface UserHeadCurlyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadCurly extends SvelteComponent<UserHeadCurlyProps> {}
