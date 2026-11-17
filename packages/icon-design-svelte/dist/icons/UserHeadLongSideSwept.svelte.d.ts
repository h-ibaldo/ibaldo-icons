import { SvelteComponent } from 'svelte';

export interface UserHeadLongSideSweptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadLongSideSwept extends SvelteComponent<UserHeadLongSideSweptProps> {}
