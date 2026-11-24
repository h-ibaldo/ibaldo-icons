import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DraftingCompassArcProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DraftingCompassArc: ForwardRefExoticComponent<DraftingCompassArcProps & RefAttributes<SVGSVGElement>>;

export default DraftingCompassArc;
export { DraftingCompassArc };
