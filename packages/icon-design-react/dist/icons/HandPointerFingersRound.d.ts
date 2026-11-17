import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandPointerFingersRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandPointerFingersRound: ForwardRefExoticComponent<HandPointerFingersRoundProps & RefAttributes<SVGSVGElement>>;

export default HandPointerFingersRound;
export { HandPointerFingersRound };
