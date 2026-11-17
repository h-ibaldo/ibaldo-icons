import { SvelteComponent } from 'svelte';

export interface ChatStackXCornerStaggeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackXCornerStaggered extends SvelteComponent<ChatStackXCornerStaggeredProps> {}
