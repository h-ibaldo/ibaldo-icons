import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign3PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign3Plus: ForwardRefExoticComponent<AtSign3PlusProps & RefAttributes<SVGSVGElement>>;

export default AtSign3Plus;
export { AtSign3Plus };
