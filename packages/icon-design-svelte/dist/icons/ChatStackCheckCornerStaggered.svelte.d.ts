import { SvelteComponent } from 'svelte';

export interface ChatStackCheckCornerStaggeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackCheckCornerStaggered extends SvelteComponent<ChatStackCheckCornerStaggeredProps> {}
