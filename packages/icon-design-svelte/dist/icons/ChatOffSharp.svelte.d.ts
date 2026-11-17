import { SvelteComponent } from 'svelte';

export interface ChatOffSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOffSharp extends SvelteComponent<ChatOffSharpProps> {}
