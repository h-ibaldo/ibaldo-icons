import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LupeSearchReflexProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LupeSearchReflex: ForwardRefExoticComponent<LupeSearchReflexProps & RefAttributes<SVGSVGElement>>;

export default LupeSearchReflex;
export { LupeSearchReflex };
