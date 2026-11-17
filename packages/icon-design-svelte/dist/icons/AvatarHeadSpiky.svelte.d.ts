import { SvelteComponent } from 'svelte';

export interface AvatarHeadSpikyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadSpiky extends SvelteComponent<AvatarHeadSpikyProps> {}
