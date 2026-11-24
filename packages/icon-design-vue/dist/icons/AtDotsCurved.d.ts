import type { DefineComponent } from 'vue';

export interface AtDotsCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtDotsCurved: DefineComponent<AtDotsCurvedProps>;

export default AtDotsCurved;
export { AtDotsCurved };
