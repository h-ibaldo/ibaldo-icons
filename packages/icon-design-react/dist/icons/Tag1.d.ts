import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tag1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tag1: ForwardRefExoticComponent<Tag1Props & RefAttributes<SVGSVGElement>>;

export default Tag1;
export { Tag1 };
