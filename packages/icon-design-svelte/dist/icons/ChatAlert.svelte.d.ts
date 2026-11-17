import { SvelteComponent } from 'svelte';

export interface ChatAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatAlert extends SvelteComponent<ChatAlertProps> {}
