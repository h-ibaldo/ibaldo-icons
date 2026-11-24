import { SvelteComponent } from 'svelte';

export interface QuestionCirclePointerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class QuestionCirclePointer extends SvelteComponent<QuestionCirclePointerProps> {}
