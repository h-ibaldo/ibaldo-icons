import type { DefineComponent } from 'vue';

export interface BinocularsCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const BinocularsCircle: DefineComponent<BinocularsCircleProps>;

export default BinocularsCircle;
export { BinocularsCircle };
