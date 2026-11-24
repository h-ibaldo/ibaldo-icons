import { SvelteComponent } from 'svelte';

export interface AvatarHeadTexturedShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadTexturedShort extends SvelteComponent<AvatarHeadTexturedShortProps> {}
