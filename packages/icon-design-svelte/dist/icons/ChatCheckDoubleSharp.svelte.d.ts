import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleSharp extends SvelteComponent<ChatCheckDoubleSharpProps> {}
