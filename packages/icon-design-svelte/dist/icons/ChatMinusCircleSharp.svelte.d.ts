import { SvelteComponent } from 'svelte';

export interface ChatMinusCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCircleSharp extends SvelteComponent<ChatMinusCircleSharpProps> {}
