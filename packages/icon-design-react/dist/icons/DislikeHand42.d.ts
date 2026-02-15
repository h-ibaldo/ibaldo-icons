import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DislikeHand42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DislikeHand42: ForwardRefExoticComponent<DislikeHand42Props & RefAttributes<SVGSVGElement>>;

export default DislikeHand42;
export { DislikeHand42 };
