import type { DefineComponent } from 'vue';

export interface AtEqualCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtEqualCurved: DefineComponent<AtEqualCurvedProps>;

export default AtEqualCurved;
export { AtEqualCurved };
