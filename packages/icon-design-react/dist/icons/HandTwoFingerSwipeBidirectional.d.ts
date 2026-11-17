import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTwoFingerSwipeBidirectionalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTwoFingerSwipeBidirectional: ForwardRefExoticComponent<HandTwoFingerSwipeBidirectionalProps & RefAttributes<SVGSVGElement>>;

export default HandTwoFingerSwipeBidirectional;
export { HandTwoFingerSwipeBidirectional };
