import { SvelteComponent } from 'svelte';

export interface ChatDotsCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCircleSharp extends SvelteComponent<ChatDotsCircleSharpProps> {}
