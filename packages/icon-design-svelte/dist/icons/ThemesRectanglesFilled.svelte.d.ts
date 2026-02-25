import { SvelteComponent } from 'svelte';

export interface ThemesRectanglesFilledProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ThemesRectanglesFilled extends SvelteComponent<ThemesRectanglesFilledProps> {}
