import { SvelteComponent } from 'svelte';

export interface ChatStackWarningProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarning extends SvelteComponent<ChatStackWarningProps> {}
