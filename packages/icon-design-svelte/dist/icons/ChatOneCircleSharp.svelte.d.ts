import { SvelteComponent } from 'svelte';

export interface ChatOneCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOneCircleSharp extends SvelteComponent<ChatOneCircleSharpProps> {}
