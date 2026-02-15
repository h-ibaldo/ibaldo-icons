import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tag3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tag3: ForwardRefExoticComponent<Tag3Props & RefAttributes<SVGSVGElement>>;

export default Tag3;
export { Tag3 };
