import { SvelteComponent } from 'svelte';

export interface BadgeQuestionPetalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeQuestionPetal extends SvelteComponent<BadgeQuestionPetalProps> {}
