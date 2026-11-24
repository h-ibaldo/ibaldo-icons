import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CrownTaperedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CrownTapered: ForwardRefExoticComponent<CrownTaperedProps & RefAttributes<SVGSVGElement>>;

export default CrownTapered;
export { CrownTapered };
