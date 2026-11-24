import { SvelteComponent } from 'svelte';

export interface ChatPlusSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusSharp extends SvelteComponent<ChatPlusSharpProps> {}
