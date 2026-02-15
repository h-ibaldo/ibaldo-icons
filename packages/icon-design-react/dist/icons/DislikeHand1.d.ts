import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DislikeHand1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DislikeHand1: ForwardRefExoticComponent<DislikeHand1Props & RefAttributes<SVGSVGElement>>;

export default DislikeHand1;
export { DislikeHand1 };
