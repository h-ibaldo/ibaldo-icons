import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSpokesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSpokes: ForwardRefExoticComponent<GearSpokesProps & RefAttributes<SVGSVGElement>>;

export default GearSpokes;
export { GearSpokes };
