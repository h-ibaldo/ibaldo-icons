import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtCheck: ForwardRefExoticComponent<AtCheckProps & RefAttributes<SVGSVGElement>>;

export default AtCheck;
export { AtCheck };
