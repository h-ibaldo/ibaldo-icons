import type { DefineComponent } from 'vue';

export interface AtCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCurved: DefineComponent<AtCurvedProps>;

export default AtCurved;
export { AtCurved };
