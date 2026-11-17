import { SvelteComponent } from 'svelte';

export interface AvatarHeadSpaceBunsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadSpaceBuns extends SvelteComponent<AvatarHeadSpaceBunsProps> {}
