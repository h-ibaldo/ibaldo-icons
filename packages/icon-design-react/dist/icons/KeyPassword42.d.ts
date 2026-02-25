import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyPassword42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyPassword42: ForwardRefExoticComponent<KeyPassword42Props & RefAttributes<SVGSVGElement>>;

export default KeyPassword42;
export { KeyPassword42 };
