import { SvelteComponent } from 'svelte';

export interface ChatStackWarningLayeredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarningLayered extends SvelteComponent<ChatStackWarningLayeredProps> {}
