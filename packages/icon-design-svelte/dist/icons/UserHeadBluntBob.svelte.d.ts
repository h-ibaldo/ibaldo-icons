import { SvelteComponent } from 'svelte';

export interface UserHeadBluntBobProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadBluntBob extends SvelteComponent<UserHeadBluntBobProps> {}
