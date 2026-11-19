import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayLines: ForwardRefExoticComponent<TrayLinesProps & RefAttributes<SVGSVGElement>>;

export default TrayLines;
export { TrayLines };
