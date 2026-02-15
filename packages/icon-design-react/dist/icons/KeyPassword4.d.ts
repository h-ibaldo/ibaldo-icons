import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyPassword4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyPassword4: ForwardRefExoticComponent<KeyPassword4Props & RefAttributes<SVGSVGElement>>;

export default KeyPassword4;
export { KeyPassword4 };
