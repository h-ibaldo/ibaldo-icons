import type { DefineComponent } from 'vue';

export interface BoxOpenPerspectiveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxOpenPerspective: DefineComponent<BoxOpenPerspectiveProps>;

export default BoxOpenPerspective;
export { BoxOpenPerspective };
