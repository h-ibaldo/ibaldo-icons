import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerCircle: ForwardRefExoticComponent<PointerCircleProps & RefAttributes<SVGSVGElement>>;

export default PointerCircle;
export { PointerCircle };
