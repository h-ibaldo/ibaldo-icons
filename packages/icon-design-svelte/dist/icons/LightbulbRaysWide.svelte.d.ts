import { SvelteComponent } from 'svelte';

export interface LightbulbRaysWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LightbulbRaysWide extends SvelteComponent<LightbulbRaysWideProps> {}
