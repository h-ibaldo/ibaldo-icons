import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4RemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4Remove: ForwardRefExoticComponent<Tab4RemoveProps & RefAttributes<SVGSVGElement>>;

export default Tab4Remove;
export { Tab4Remove };
