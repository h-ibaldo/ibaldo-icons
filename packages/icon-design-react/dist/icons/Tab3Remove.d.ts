import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3RemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3Remove: ForwardRefExoticComponent<Tab3RemoveProps & RefAttributes<SVGSVGElement>>;

export default Tab3Remove;
export { Tab3Remove };
