import type { DefineComponent } from 'vue';

export interface GraphicsCardProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GraphicsCard: DefineComponent<GraphicsCardProps>;

export default GraphicsCard;
export { GraphicsCard };
