import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyboardOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyboardOff: ForwardRefExoticComponent<KeyboardOffProps & RefAttributes<SVGSVGElement>>;

export default KeyboardOff;
export { KeyboardOff };
