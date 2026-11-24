import type { DefineComponent } from 'vue';

export interface AtXCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtXCircle: DefineComponent<AtXCircleProps>;

export default AtXCircle;
export { AtXCircle };
