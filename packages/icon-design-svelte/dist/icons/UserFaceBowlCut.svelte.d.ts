import { SvelteComponent } from 'svelte';

export interface UserFaceBowlCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceBowlCut extends SvelteComponent<UserFaceBowlCutProps> {}
