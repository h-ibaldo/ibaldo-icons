import { SvelteComponent } from 'svelte';

export interface BadgeQuestionWavyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BadgeQuestionWavy extends SvelteComponent<BadgeQuestionWavyProps> {}
