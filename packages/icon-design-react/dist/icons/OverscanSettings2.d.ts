import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OverscanSettings2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OverscanSettings2: ForwardRefExoticComponent<OverscanSettings2Props & RefAttributes<SVGSVGElement>>;

export default OverscanSettings2;
export { OverscanSettings2 };
