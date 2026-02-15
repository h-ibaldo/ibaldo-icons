import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PiramidHierarchyMaslowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PiramidHierarchyMaslow: ForwardRefExoticComponent<PiramidHierarchyMaslowProps & RefAttributes<SVGSVGElement>>;

export default PiramidHierarchyMaslow;
export { PiramidHierarchyMaslow };
