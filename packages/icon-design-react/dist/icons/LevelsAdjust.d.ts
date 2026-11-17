import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LevelsAdjustProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LevelsAdjust: ForwardRefExoticComponent<LevelsAdjustProps & RefAttributes<SVGSVGElement>>;

export default LevelsAdjust;
export { LevelsAdjust };
