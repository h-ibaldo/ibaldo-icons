import { SvelteComponent } from 'svelte';

export interface ChatStackWarningBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarningBoxy extends SvelteComponent<ChatStackWarningBoxyProps> {}
