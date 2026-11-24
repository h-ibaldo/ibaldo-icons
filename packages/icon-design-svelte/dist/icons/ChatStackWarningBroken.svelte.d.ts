import { SvelteComponent } from 'svelte';

export interface ChatStackWarningBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarningBroken extends SvelteComponent<ChatStackWarningBrokenProps> {}
