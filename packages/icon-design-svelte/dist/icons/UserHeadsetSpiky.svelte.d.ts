import { SvelteComponent } from 'svelte';

export interface UserHeadsetSpikyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UserHeadsetSpiky extends SvelteComponent<UserHeadsetSpikyProps> {}
