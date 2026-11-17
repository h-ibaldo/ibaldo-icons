import { SvelteComponent } from 'svelte';

export interface AvatarFaceSideSweptShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarFaceSideSweptShort extends SvelteComponent<AvatarFaceSideSweptShortProps> {}
