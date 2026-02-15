import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DislikeHand3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DislikeHand3: ForwardRefExoticComponent<DislikeHand3Props & RefAttributes<SVGSVGElement>>;

export default DislikeHand3;
export { DislikeHand3 };
