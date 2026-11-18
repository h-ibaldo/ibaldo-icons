import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDashedHalfSparseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDashedHalfSparse: ForwardRefExoticComponent<ClockDashedHalfSparseProps & RefAttributes<SVGSVGElement>>;

export default ClockDashedHalfSparse;
export { ClockDashedHalfSparse };
