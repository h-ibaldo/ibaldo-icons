import { SvelteComponent } from 'svelte';

export interface UserFaceTopKnotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceTopKnot extends SvelteComponent<UserFaceTopKnotProps> {}
