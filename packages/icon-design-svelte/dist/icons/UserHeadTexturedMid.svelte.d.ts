import { SvelteComponent } from 'svelte';

export interface UserHeadTexturedMidProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadTexturedMid extends SvelteComponent<UserHeadTexturedMidProps> {}
