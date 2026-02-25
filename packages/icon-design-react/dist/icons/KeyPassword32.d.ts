import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyPassword32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyPassword32: ForwardRefExoticComponent<KeyPassword32Props & RefAttributes<SVGSVGElement>>;

export default KeyPassword32;
export { KeyPassword32 };
