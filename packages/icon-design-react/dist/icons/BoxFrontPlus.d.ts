import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxFrontPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxFrontPlus: ForwardRefExoticComponent<BoxFrontPlusProps & RefAttributes<SVGSVGElement>>;

export default BoxFrontPlus;
export { BoxFrontPlus };
