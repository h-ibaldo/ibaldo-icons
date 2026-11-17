import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign5CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign5Check: ForwardRefExoticComponent<AtSign5CheckProps & RefAttributes<SVGSVGElement>>;

export default AtSign5Check;
export { AtSign5Check };
