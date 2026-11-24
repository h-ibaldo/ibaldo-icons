import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionKeyCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionKeyCircle: ForwardRefExoticComponent<OptionKeyCircleProps & RefAttributes<SVGSVGElement>>;

export default OptionKeyCircle;
export { OptionKeyCircle };
