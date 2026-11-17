import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OverscanLeftRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OverscanLeftRight: ForwardRefExoticComponent<OverscanLeftRightProps & RefAttributes<SVGSVGElement>>;

export default OverscanLeftRight;
export { OverscanLeftRight };
