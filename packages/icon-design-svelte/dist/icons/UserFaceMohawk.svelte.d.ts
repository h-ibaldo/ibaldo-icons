import { SvelteComponent } from 'svelte';

export interface UserFaceMohawkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceMohawk extends SvelteComponent<UserFaceMohawkProps> {}
