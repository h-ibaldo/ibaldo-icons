import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DoNotDisturbBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DoNotDisturbBar: ForwardRefExoticComponent<DoNotDisturbBarProps & RefAttributes<SVGSVGElement>>;

export default DoNotDisturbBar;
export { DoNotDisturbBar };
