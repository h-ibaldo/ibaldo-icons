import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbUpFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbUpFingers: ForwardRefExoticComponent<HandThumbUpFingersProps & RefAttributes<SVGSVGElement>>;

export default HandThumbUpFingers;
export { HandThumbUpFingers };
