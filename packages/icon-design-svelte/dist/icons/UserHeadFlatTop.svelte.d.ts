import { SvelteComponent } from 'svelte';

export interface UserHeadFlatTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadFlatTop extends SvelteComponent<UserHeadFlatTopProps> {}
