import { SvelteComponent } from 'svelte';

export interface UserFaceSideSweptShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceSideSweptShort extends SvelteComponent<UserFaceSideSweptShortProps> {}
