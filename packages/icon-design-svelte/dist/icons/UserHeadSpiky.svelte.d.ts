import { SvelteComponent } from 'svelte';

export interface UserHeadSpikyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadSpiky extends SvelteComponent<UserHeadSpikyProps> {}
