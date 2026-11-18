import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CopyrightSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CopyrightSmall: ForwardRefExoticComponent<CopyrightSmallProps & RefAttributes<SVGSVGElement>>;

export default CopyrightSmall;
export { CopyrightSmall };
