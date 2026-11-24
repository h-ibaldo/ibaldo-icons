import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ToggleMiddleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ToggleMiddle: ForwardRefExoticComponent<ToggleMiddleProps & RefAttributes<SVGSVGElement>>;

export default ToggleMiddle;
export { ToggleMiddle };
