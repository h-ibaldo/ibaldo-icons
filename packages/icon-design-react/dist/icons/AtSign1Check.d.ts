import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign1CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign1Check: ForwardRefExoticComponent<AtSign1CheckProps & RefAttributes<SVGSVGElement>>;

export default AtSign1Check;
export { AtSign1Check };
