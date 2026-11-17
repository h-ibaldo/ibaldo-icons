import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ProgressSpinnerDoubleLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ProgressSpinnerDoubleLines: ForwardRefExoticComponent<ProgressSpinnerDoubleLinesProps & RefAttributes<SVGSVGElement>>;

export default ProgressSpinnerDoubleLines;
export { ProgressSpinnerDoubleLines };
