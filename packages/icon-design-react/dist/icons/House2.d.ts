import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House2: ForwardRefExoticComponent<House2Props & RefAttributes<SVGSVGElement>>;

export default House2;
export { House2 };
