import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OverscanSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OverscanSmall: ForwardRefExoticComponent<OverscanSmallProps & RefAttributes<SVGSVGElement>>;

export default OverscanSmall;
export { OverscanSmall };
