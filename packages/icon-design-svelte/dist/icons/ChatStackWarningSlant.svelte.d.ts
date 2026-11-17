import { SvelteComponent } from 'svelte';

export interface ChatStackWarningSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackWarningSlant extends SvelteComponent<ChatStackWarningSlantProps> {}
