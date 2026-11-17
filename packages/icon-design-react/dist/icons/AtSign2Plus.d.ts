import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2Plus: ForwardRefExoticComponent<AtSign2PlusProps & RefAttributes<SVGSVGElement>>;

export default AtSign2Plus;
export { AtSign2Plus };
