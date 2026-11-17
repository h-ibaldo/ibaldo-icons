import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Key2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Key2: ForwardRefExoticComponent<Key2Props & RefAttributes<SVGSVGElement>>;

export default Key2;
export { Key2 };
