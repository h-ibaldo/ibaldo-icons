import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MapPinNodesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MapPinNodes: ForwardRefExoticComponent<MapPinNodesProps & RefAttributes<SVGSVGElement>>;

export default MapPinNodes;
export { MapPinNodes };
