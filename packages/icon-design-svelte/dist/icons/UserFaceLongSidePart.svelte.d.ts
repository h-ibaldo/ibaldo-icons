import { SvelteComponent } from 'svelte';

export interface UserFaceLongSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceLongSidePart extends SvelteComponent<UserFaceLongSidePartProps> {}
