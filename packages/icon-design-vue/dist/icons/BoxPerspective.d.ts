import type { DefineComponent } from 'vue';

export interface BoxPerspectiveProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BoxPerspective: DefineComponent<BoxPerspectiveProps>;

export default BoxPerspective;
export { BoxPerspective };
