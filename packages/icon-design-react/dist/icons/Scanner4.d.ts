import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Scanner4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Scanner4: ForwardRefExoticComponent<Scanner4Props & RefAttributes<SVGSVGElement>>;

export default Scanner4;
export { Scanner4 };
