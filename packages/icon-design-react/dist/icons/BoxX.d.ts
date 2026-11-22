import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxX: ForwardRefExoticComponent<BoxXProps & RefAttributes<SVGSVGElement>>;

export default BoxX;
export { BoxX };
