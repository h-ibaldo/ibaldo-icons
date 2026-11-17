import { SvelteComponent } from 'svelte';

export interface UserHeadBaldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadBald extends SvelteComponent<UserHeadBaldProps> {}
