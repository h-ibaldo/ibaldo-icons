import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeypadRoundedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeypadRounded: ForwardRefExoticComponent<KeypadRoundedProps & RefAttributes<SVGSVGElement>>;

export default KeypadRounded;
export { KeypadRounded };
