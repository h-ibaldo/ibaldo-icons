import { SvelteComponent } from 'svelte';

export interface ChatWarningSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarningSlant extends SvelteComponent<ChatWarningSlantProps> {}
