import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2Check: ForwardRefExoticComponent<AtSign2CheckProps & RefAttributes<SVGSVGElement>>;

export default AtSign2Check;
export { AtSign2Check };
