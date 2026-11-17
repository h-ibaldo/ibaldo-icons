import { SvelteComponent } from 'svelte';

export interface UserFaceTexturedPonytailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceTexturedPonytail extends SvelteComponent<UserFaceTexturedPonytailProps> {}
