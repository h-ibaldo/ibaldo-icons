import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownUnderlineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrownUnderline: ForwardRefExoticComponent<CrownUnderlineProps & RefAttributes<SVGSVGElement>>;

export default CrownUnderline;
export { CrownUnderline };
