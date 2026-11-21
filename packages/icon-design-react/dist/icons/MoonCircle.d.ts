import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonCircle: ForwardRefExoticComponent<MoonCircleProps & RefAttributes<SVGSVGElement>>;

export default MoonCircle;
export { MoonCircle };
