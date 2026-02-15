import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tag4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tag4: ForwardRefExoticComponent<Tag4Props & RefAttributes<SVGSVGElement>>;

export default Tag4;
export { Tag4 };
