import type { DefineComponent } from 'vue';

export interface CrownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Crown: DefineComponent<CrownProps>;

export default Crown;
export { Crown };
