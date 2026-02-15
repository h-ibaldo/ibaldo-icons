import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OverscanSettings3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OverscanSettings3: ForwardRefExoticComponent<OverscanSettings3Props & RefAttributes<SVGSVGElement>>;

export default OverscanSettings3;
export { OverscanSettings3 };
