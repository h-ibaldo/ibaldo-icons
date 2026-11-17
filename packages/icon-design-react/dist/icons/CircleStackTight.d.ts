import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleStackTightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleStackTight: ForwardRefExoticComponent<CircleStackTightProps & RefAttributes<SVGSVGElement>>;

export default CircleStackTight;
export { CircleStackTight };
