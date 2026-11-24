import { SvelteComponent } from 'svelte';

export interface ChatMinusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCorner extends SvelteComponent<ChatMinusCornerProps> {}
