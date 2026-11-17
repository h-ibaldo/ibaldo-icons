import { SvelteComponent } from 'svelte';

export interface UserHeadSpaceBunsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadSpaceBuns extends SvelteComponent<UserHeadSpaceBunsProps> {}
