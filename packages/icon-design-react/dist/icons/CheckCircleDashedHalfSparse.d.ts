import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleDashedHalfSparseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleDashedHalfSparse: ForwardRefExoticComponent<CheckCircleDashedHalfSparseProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleDashedHalfSparse;
export { CheckCircleDashedHalfSparse };
