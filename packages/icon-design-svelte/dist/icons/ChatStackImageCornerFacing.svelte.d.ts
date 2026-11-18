import { SvelteComponent } from 'svelte';

export interface ChatStackImageCornerFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackImageCornerFacing extends SvelteComponent<ChatStackImageCornerFacingProps> {}
