import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VipLinesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VipLines: ForwardRefExoticComponent<VipLinesProps & RefAttributes<SVGSVGElement>>;

export default VipLines;
export { VipLines };
