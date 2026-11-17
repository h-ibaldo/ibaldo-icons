import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleSharp extends SvelteComponent<ChatCheckCircleSharpProps> {}
