import { SvelteComponent } from 'svelte';

export interface ChatStackSearchCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackSearchCorner extends SvelteComponent<ChatStackSearchCornerProps> {}
