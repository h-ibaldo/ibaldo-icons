import { SvelteComponent } from 'svelte';

export interface ChatWarningBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarningBroken extends SvelteComponent<ChatWarningBrokenProps> {}
