import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignLeftBarsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignLeftBars: ForwardRefExoticComponent<AlignLeftBarsProps & RefAttributes<SVGSVGElement>>;

export default AlignLeftBars;
export { AlignLeftBars };
