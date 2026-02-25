import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OverscanSettings32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OverscanSettings32: ForwardRefExoticComponent<OverscanSettings32Props & RefAttributes<SVGSVGElement>>;

export default OverscanSettings32;
export { OverscanSettings32 };
