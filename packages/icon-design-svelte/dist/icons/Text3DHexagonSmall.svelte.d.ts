import { SvelteComponent } from 'svelte';

export interface Text3DHexagonSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text3DHexagonSmall extends SvelteComponent<Text3DHexagonSmallProps> {}
