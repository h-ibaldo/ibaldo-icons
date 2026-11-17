import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign4CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign4Check: ForwardRefExoticComponent<AtSign4CheckProps & RefAttributes<SVGSVGElement>>;

export default AtSign4Check;
export { AtSign4Check };
