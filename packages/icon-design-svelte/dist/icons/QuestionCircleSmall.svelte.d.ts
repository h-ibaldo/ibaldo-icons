import { SvelteComponent } from 'svelte';

export interface QuestionCircleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionCircleSmall extends SvelteComponent<QuestionCircleSmallProps> {}
