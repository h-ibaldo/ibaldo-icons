import { SvelteComponent } from 'svelte';

export interface UserFaceTexturedPuffsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserFaceTexturedPuffs extends SvelteComponent<UserFaceTexturedPuffsProps> {}
