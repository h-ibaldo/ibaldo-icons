import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxFrontCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxFrontCheck: ForwardRefExoticComponent<BoxFrontCheckProps & RefAttributes<SVGSVGElement>>;

export default BoxFrontCheck;
export { BoxFrontCheck };
