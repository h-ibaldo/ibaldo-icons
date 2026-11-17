import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Key4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Key4: ForwardRefExoticComponent<Key4Props & RefAttributes<SVGSVGElement>>;

export default Key4;
export { Key4 };
