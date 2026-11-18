import { SvelteComponent } from 'svelte';

export interface ChatClockTooltip2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClockTooltip2 extends SvelteComponent<ChatClockTooltip2Props> {}
