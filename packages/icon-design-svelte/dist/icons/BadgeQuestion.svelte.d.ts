import { SvelteComponent } from 'svelte';

export interface BadgeQuestionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeQuestion extends SvelteComponent<BadgeQuestionProps> {}
