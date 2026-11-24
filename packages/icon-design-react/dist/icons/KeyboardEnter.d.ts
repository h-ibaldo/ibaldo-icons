import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyboardEnterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyboardEnter: ForwardRefExoticComponent<KeyboardEnterProps & RefAttributes<SVGSVGElement>>;

export default KeyboardEnter;
export { KeyboardEnter };
