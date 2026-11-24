import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VpnLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VpnLines: ForwardRefExoticComponent<VpnLinesProps & RefAttributes<SVGSVGElement>>;

export default VpnLines;
export { VpnLines };
