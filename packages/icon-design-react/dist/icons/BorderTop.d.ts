import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderTopProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderTop: ForwardRefExoticComponent<BorderTopProps & RefAttributes<SVGSVGElement>>;

export default BorderTop;
export { BorderTop };
