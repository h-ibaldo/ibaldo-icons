import { SvelteComponent } from 'svelte';

export interface ChatStackPlusCornerStaggeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackPlusCornerStaggered extends SvelteComponent<ChatStackPlusCornerStaggeredProps> {}
