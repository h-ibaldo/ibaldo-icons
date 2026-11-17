import { SvelteComponent } from 'svelte';

export interface SliderTrackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SliderTrack extends SvelteComponent<SliderTrackProps> {}
