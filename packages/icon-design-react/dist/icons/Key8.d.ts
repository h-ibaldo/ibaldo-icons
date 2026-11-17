import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Key8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Key8: ForwardRefExoticComponent<Key8Props & RefAttributes<SVGSVGElement>>;

export default Key8;
export { Key8 };
