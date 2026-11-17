import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PyramidHierarchyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PyramidHierarchy: ForwardRefExoticComponent<PyramidHierarchyProps & RefAttributes<SVGSVGElement>>;

export default PyramidHierarchy;
export { PyramidHierarchy };
