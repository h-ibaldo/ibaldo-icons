import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVerticalFacing extends SvelteComponent<ChatStackDotsVerticalFacingProps> {}
