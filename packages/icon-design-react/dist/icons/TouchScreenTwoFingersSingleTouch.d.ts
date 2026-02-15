import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenTwoFingersSingleTouchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenTwoFingersSingleTouch: ForwardRefExoticComponent<TouchScreenTwoFingersSingleTouchProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenTwoFingersSingleTouch;
export { TouchScreenTwoFingersSingleTouch };
