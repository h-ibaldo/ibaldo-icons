import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncNodesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncNodes: ForwardRefExoticComponent<ArrowSyncNodesProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncNodes;
export { ArrowSyncNodes };
