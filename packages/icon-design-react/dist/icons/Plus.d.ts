import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Plus: ForwardRefExoticComponent<PlusProps & RefAttributes<SVGSVGElement>>;

export default Plus;
export { Plus };
