import { SvelteComponent } from 'svelte';

export interface BadgeQuestionPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeQuestionPointed extends SvelteComponent<BadgeQuestionPointedProps> {}
