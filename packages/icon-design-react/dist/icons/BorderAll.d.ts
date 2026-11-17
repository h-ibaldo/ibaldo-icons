import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderAllProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderAll: ForwardRefExoticComponent<BorderAllProps & RefAttributes<SVGSVGElement>>;

export default BorderAll;
export { BorderAll };
