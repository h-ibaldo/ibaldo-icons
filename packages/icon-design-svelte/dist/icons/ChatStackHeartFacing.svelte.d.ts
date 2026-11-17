import { SvelteComponent } from 'svelte';

export interface ChatStackHeartFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackHeartFacing extends SvelteComponent<ChatStackHeartFacingProps> {}
