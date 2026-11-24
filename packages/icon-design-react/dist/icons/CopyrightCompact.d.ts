import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CopyrightCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CopyrightCompact: ForwardRefExoticComponent<CopyrightCompactProps & RefAttributes<SVGSVGElement>>;

export default CopyrightCompact;
export { CopyrightCompact };
