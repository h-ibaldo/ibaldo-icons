import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign3CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign3Check: ForwardRefExoticComponent<AtSign3CheckProps & RefAttributes<SVGSVGElement>>;

export default AtSign3Check;
export { AtSign3Check };
