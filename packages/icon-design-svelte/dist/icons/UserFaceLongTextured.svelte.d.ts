import { SvelteComponent } from 'svelte';

export interface UserFaceLongTexturedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongTextured extends SvelteComponent<UserFaceLongTexturedProps> {}
