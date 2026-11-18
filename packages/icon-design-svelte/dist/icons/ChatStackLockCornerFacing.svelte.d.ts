import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCornerFacing extends SvelteComponent<ChatStackLockCornerFacingProps> {}
