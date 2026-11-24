import { SvelteComponent } from 'svelte';

export interface AvatarHeadCurlyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AvatarHeadCurly extends SvelteComponent<AvatarHeadCurlyProps> {}
