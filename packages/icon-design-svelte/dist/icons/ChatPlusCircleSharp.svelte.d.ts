import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircleSharp extends SvelteComponent<ChatPlusCircleSharpProps> {}
