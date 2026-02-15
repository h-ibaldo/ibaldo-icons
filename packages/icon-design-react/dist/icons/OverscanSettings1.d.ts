import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OverscanSettings1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OverscanSettings1: ForwardRefExoticComponent<OverscanSettings1Props & RefAttributes<SVGSVGElement>>;

export default OverscanSettings1;
export { OverscanSettings1 };
