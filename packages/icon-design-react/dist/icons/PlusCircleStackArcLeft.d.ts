import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PlusCircleStackArcLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PlusCircleStackArcLeft: ForwardRefExoticComponent<PlusCircleStackArcLeftProps & RefAttributes<SVGSVGElement>>;

export default PlusCircleStackArcLeft;
export { PlusCircleStackArcLeft };
