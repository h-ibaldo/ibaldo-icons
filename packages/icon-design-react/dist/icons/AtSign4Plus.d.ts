import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign4PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign4Plus: ForwardRefExoticComponent<AtSign4PlusProps & RefAttributes<SVGSVGElement>>;

export default AtSign4Plus;
export { AtSign4Plus };
