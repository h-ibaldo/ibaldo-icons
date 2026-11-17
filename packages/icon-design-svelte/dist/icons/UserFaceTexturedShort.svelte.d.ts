import { SvelteComponent } from 'svelte';

export interface UserFaceTexturedShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceTexturedShort extends SvelteComponent<UserFaceTexturedShortProps> {}
