import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoNotDisturbCircleBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoNotDisturbCircleBar: ForwardRefExoticComponent<DoNotDisturbCircleBarProps & RefAttributes<SVGSVGElement>>;

export default DoNotDisturbCircleBar;
export { DoNotDisturbCircleBar };
