import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tag32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tag32: ForwardRefExoticComponent<Tag32Props & RefAttributes<SVGSVGElement>>;

export default Tag32;
export { Tag32 };
