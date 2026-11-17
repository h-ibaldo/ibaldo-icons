import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LayoutListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LayoutList: ForwardRefExoticComponent<LayoutListProps & RefAttributes<SVGSVGElement>>;

export default LayoutList;
export { LayoutList };
