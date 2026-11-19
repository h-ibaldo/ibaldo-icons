import type { DefineComponent } from 'vue';

export interface AtMinusCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtMinusCurved: DefineComponent<AtMinusCurvedProps>;

export default AtMinusCurved;
export { AtMinusCurved };
