import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandThumbDownFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandThumbDownFingers: ForwardRefExoticComponent<HandThumbDownFingersProps & RefAttributes<SVGSVGElement>>;

export default HandThumbDownFingers;
export { HandThumbDownFingers };
