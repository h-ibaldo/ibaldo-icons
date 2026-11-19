import type { DefineComponent } from 'vue';

export interface AtPlusCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtPlusCurved: DefineComponent<AtPlusCurvedProps>;

export default AtPlusCurved;
export { AtPlusCurved };
