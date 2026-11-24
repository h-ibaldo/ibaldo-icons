import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncHexagonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncHexagon: ForwardRefExoticComponent<ArrowSyncHexagonProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncHexagon;
export { ArrowSyncHexagon };
