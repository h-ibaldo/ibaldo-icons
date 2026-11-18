import { SvelteComponent } from 'svelte';

export interface ChatWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarning extends SvelteComponent<ChatWarningProps> {}
