import { SvelteComponent } from 'svelte';

export interface ChatStackSearchCornerFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSearchCornerFacing extends SvelteComponent<ChatStackSearchCornerFacingProps> {}
