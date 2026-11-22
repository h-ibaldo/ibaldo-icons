import { SvelteComponent } from 'svelte';

export interface UserGroupContourProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserGroupContour extends SvelteComponent<UserGroupContourProps> {}
