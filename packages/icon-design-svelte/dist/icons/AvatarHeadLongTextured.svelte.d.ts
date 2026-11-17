import { SvelteComponent } from 'svelte';

export interface AvatarHeadLongTexturedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadLongTextured extends SvelteComponent<AvatarHeadLongTexturedProps> {}
