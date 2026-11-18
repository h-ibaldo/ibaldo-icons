import { SvelteComponent } from 'svelte';

export interface ChatSearchCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchCorner extends SvelteComponent<ChatSearchCornerProps> {}
