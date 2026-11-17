import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BurstLVProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BurstLV: ForwardRefExoticComponent<BurstLVProps & RefAttributes<SVGSVGElement>>;

export default BurstLV;
export { BurstLV };
