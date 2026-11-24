import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleCorner extends SvelteComponent<ChatCheckDoubleCornerProps> {}
