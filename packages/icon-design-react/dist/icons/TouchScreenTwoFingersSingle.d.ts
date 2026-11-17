import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenTwoFingersSingleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenTwoFingersSingle: ForwardRefExoticComponent<TouchScreenTwoFingersSingleProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenTwoFingersSingle;
export { TouchScreenTwoFingersSingle };
