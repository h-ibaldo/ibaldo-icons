import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandPointerRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandPointerRound: ForwardRefExoticComponent<HandPointerRoundProps & RefAttributes<SVGSVGElement>>;

export default HandPointerRound;
export { HandPointerRound };
