import { SvelteComponent } from 'svelte';

export interface MobileSocialNetworkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileSocialNetwork extends SvelteComponent<MobileSocialNetworkProps> {}
