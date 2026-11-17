import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4PlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4Plus: ForwardRefExoticComponent<Tab4PlusProps & RefAttributes<SVGSVGElement>>;

export default Tab4Plus;
export { Tab4Plus };
