import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellCheckCircleFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellCheckCircleFlat: ForwardRefExoticComponent<BellCheckCircleFlatProps & RefAttributes<SVGSVGElement>>;

export default BellCheckCircleFlat;
export { BellCheckCircleFlat };
