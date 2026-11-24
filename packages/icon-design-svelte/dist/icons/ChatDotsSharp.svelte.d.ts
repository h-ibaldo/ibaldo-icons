import { SvelteComponent } from 'svelte';

export interface ChatDotsSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsSharp extends SvelteComponent<ChatDotsSharpProps> {}
