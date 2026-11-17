import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeySmoothNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeySmoothNotch: ForwardRefExoticComponent<KeySmoothNotchProps & RefAttributes<SVGSVGElement>>;

export default KeySmoothNotch;
export { KeySmoothNotch };
