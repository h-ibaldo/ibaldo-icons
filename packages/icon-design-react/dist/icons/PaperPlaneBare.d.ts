import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperPlaneBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperPlaneBare: ForwardRefExoticComponent<PaperPlaneBareProps & RefAttributes<SVGSVGElement>>;

export default PaperPlaneBare;
export { PaperPlaneBare };
