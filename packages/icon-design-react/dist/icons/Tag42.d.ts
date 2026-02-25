import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tag42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tag42: ForwardRefExoticComponent<Tag42Props & RefAttributes<SVGSVGElement>>;

export default Tag42;
export { Tag42 };
