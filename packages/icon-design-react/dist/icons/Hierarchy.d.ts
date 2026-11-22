import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HierarchyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Hierarchy: ForwardRefExoticComponent<HierarchyProps & RefAttributes<SVGSVGElement>>;

export default Hierarchy;
export { Hierarchy };
