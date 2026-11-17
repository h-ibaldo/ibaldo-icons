import { SvelteComponent } from 'svelte';

export interface UserFaceSpikyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceSpiky extends SvelteComponent<UserFaceSpikyProps> {}
