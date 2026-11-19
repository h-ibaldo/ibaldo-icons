import type { DefineComponent } from 'vue';

export interface MapPinNodesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MapPinNodes: DefineComponent<MapPinNodesProps>;

export default MapPinNodes;
export { MapPinNodes };
