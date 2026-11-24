import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HashCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HashCircle: ForwardRefExoticComponent<HashCircleProps & RefAttributes<SVGSVGElement>>;

export default HashCircle;
export { HashCircle };
