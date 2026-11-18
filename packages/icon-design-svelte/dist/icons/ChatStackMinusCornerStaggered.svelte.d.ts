import { SvelteComponent } from 'svelte';

export interface ChatStackMinusCornerStaggeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackMinusCornerStaggered extends SvelteComponent<ChatStackMinusCornerStaggeredProps> {}
