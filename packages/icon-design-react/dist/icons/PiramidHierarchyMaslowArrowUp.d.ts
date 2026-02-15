import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PiramidHierarchyMaslowArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PiramidHierarchyMaslowArrowUp: ForwardRefExoticComponent<PiramidHierarchyMaslowArrowUpProps & RefAttributes<SVGSVGElement>>;

export default PiramidHierarchyMaslowArrowUp;
export { PiramidHierarchyMaslowArrowUp };
