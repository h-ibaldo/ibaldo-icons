import { SvelteComponent } from 'svelte';

export interface ChatStackThreeStaggeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackThreeStaggered extends SvelteComponent<ChatStackThreeStaggeredProps> {}
