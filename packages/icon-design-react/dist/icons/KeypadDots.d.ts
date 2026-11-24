import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeypadDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeypadDots: ForwardRefExoticComponent<KeypadDotsProps & RefAttributes<SVGSVGElement>>;

export default KeypadDots;
export { KeypadDots };
