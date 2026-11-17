import { SvelteComponent } from 'svelte';

export interface UserHeadShoulderSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadShoulderSidePart extends SvelteComponent<UserHeadShoulderSidePartProps> {}
