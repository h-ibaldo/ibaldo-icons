import { SvelteComponent } from 'svelte';

export interface UserHeadCurlyBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadCurlyBob extends SvelteComponent<UserHeadCurlyBobProps> {}
