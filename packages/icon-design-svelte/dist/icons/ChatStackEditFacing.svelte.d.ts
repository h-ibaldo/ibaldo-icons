import { SvelteComponent } from 'svelte';

export interface ChatStackEditFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackEditFacing extends SvelteComponent<ChatStackEditFacingProps> {}
