import type { DefineComponent } from 'vue';

export interface VectorPolygonProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const VectorPolygon: DefineComponent<VectorPolygonProps>;

export default VectorPolygon;
export { VectorPolygon };
