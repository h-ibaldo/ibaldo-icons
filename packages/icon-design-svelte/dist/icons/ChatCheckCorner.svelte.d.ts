import { SvelteComponent } from 'svelte';

export interface ChatCheckCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCorner extends SvelteComponent<ChatCheckCornerProps> {}
