import { SvelteComponent } from 'svelte';

export interface UserFaceTexturedMidProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceTexturedMid extends SvelteComponent<UserFaceTexturedMidProps> {}
