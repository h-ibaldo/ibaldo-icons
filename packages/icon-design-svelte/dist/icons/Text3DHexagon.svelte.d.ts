import { SvelteComponent } from 'svelte';

export interface Text3DHexagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text3DHexagon extends SvelteComponent<Text3DHexagonProps> {}
