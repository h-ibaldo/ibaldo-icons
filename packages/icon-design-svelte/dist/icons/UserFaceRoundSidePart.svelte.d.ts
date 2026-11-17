import { SvelteComponent } from 'svelte';

export interface UserFaceRoundSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceRoundSidePart extends SvelteComponent<UserFaceRoundSidePartProps> {}
