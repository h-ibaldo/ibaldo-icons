import { SvelteComponent } from 'svelte';

export interface ChatDotBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotBoxy extends SvelteComponent<ChatDotBoxyProps> {}
