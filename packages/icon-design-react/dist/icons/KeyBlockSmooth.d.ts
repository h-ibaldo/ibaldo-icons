import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyBlockSmoothProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyBlockSmooth: ForwardRefExoticComponent<KeyBlockSmoothProps & RefAttributes<SVGSVGElement>>;

export default KeyBlockSmooth;
export { KeyBlockSmooth };
