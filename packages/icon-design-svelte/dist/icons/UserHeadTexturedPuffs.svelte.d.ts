import { SvelteComponent } from 'svelte';

export interface UserHeadTexturedPuffsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadTexturedPuffs extends SvelteComponent<UserHeadTexturedPuffsProps> {}
