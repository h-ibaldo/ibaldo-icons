import { SvelteComponent } from 'svelte';

export interface UserFaceShoulderSidePartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceShoulderSidePart extends SvelteComponent<UserFaceShoulderSidePartProps> {}
