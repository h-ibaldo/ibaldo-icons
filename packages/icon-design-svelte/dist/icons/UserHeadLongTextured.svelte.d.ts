import { SvelteComponent } from 'svelte';

export interface UserHeadLongTexturedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadLongTextured extends SvelteComponent<UserHeadLongTexturedProps> {}
