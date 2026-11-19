import type { DefineComponent } from 'vue';

export interface AtCheckCurvedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtCheckCurved: DefineComponent<AtCheckCurvedProps>;

export default AtCheckCurved;
export { AtCheckCurved };
