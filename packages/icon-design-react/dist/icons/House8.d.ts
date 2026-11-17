import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface House8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const House8: ForwardRefExoticComponent<House8Props & RefAttributes<SVGSVGElement>>;

export default House8;
export { House8 };
