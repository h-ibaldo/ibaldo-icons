import { SvelteComponent } from 'svelte';

export interface UserHeadsetSweptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadsetSwept extends SvelteComponent<UserHeadsetSweptProps> {}
