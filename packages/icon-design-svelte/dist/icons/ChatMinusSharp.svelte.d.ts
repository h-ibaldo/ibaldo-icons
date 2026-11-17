import { SvelteComponent } from 'svelte';

export interface ChatMinusSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusSharp extends SvelteComponent<ChatMinusSharpProps> {}
