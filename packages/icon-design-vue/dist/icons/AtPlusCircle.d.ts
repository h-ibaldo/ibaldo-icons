import type { DefineComponent } from 'vue';

export interface AtPlusCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AtPlusCircle: DefineComponent<AtPlusCircleProps>;

export default AtPlusCircle;
export { AtPlusCircle };
