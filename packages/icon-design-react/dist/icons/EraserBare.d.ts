import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface EraserBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const EraserBare: ForwardRefExoticComponent<EraserBareProps & RefAttributes<SVGSVGElement>>;

export default EraserBare;
export { EraserBare };
