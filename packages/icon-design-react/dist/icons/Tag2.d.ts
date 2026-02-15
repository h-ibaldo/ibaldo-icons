import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tag2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tag2: ForwardRefExoticComponent<Tag2Props & RefAttributes<SVGSVGElement>>;

export default Tag2;
export { Tag2 };
