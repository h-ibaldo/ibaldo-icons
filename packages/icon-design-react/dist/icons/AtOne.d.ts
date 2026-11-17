import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtOneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtOne: ForwardRefExoticComponent<AtOneProps & RefAttributes<SVGSVGElement>>;

export default AtOne;
export { AtOne };
