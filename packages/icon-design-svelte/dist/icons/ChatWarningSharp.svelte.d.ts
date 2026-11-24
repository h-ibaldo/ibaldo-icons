import { SvelteComponent } from 'svelte';

export interface ChatWarningSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarningSharp extends SvelteComponent<ChatWarningSharpProps> {}
