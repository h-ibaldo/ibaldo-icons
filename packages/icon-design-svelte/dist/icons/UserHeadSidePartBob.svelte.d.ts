import { SvelteComponent } from 'svelte';

export interface UserHeadSidePartBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadSidePartBob extends SvelteComponent<UserHeadSidePartBobProps> {}
