import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Key3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Key3: ForwardRefExoticComponent<Key3Props & RefAttributes<SVGSVGElement>>;

export default Key3;
export { Key3 };
