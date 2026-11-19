import type { DefineComponent } from 'vue';

export interface AtOneCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtOneCurved: DefineComponent<AtOneCurvedProps>;

export default AtOneCurved;
export { AtOneCurved };
