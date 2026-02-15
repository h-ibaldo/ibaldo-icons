import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DislikeHand2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DislikeHand2: ForwardRefExoticComponent<DislikeHand2Props & RefAttributes<SVGSVGElement>>;

export default DislikeHand2;
export { DislikeHand2 };
