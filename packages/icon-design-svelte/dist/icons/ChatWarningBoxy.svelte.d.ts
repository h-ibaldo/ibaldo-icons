import { SvelteComponent } from 'svelte';

export interface ChatWarningBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarningBoxy extends SvelteComponent<ChatWarningBoxyProps> {}
