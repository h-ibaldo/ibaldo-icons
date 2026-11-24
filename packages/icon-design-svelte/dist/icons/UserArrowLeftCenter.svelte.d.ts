import { SvelteComponent } from 'svelte';

export interface UserArrowLeftCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserArrowLeftCenter extends SvelteComponent<UserArrowLeftCenterProps> {}
