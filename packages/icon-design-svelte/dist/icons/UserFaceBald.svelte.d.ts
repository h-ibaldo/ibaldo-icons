import { SvelteComponent } from 'svelte';

export interface UserFaceBaldProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceBald extends SvelteComponent<UserFaceBaldProps> {}
