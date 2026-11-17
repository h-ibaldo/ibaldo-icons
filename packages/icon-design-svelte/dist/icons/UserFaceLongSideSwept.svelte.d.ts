import { SvelteComponent } from 'svelte';

export interface UserFaceLongSideSweptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongSideSwept extends SvelteComponent<UserFaceLongSideSweptProps> {}
