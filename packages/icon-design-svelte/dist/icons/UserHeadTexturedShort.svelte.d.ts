import { SvelteComponent } from 'svelte';

export interface UserHeadTexturedShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadTexturedShort extends SvelteComponent<UserHeadTexturedShortProps> {}
