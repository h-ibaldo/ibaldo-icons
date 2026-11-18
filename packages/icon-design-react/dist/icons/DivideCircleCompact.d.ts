import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DivideCircleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DivideCircleCompact: ForwardRefExoticComponent<DivideCircleCompactProps & RefAttributes<SVGSVGElement>>;

export default DivideCircleCompact;
export { DivideCircleCompact };
