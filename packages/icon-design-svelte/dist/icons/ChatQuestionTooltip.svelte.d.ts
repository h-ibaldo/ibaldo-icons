import { SvelteComponent } from 'svelte';

export interface ChatQuestionTooltipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatQuestionTooltip extends SvelteComponent<ChatQuestionTooltipProps> {}
