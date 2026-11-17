import { SvelteComponent } from 'svelte';

export interface UserFaceFlippedEndsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceFlippedEnds extends SvelteComponent<UserFaceFlippedEndsProps> {}
