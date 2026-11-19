import type { DefineComponent } from 'vue';

export interface AtXCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtXCurved: DefineComponent<AtXCurvedProps>;

export default AtXCurved;
export { AtXCurved };
