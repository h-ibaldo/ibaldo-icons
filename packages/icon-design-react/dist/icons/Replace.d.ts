import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ReplaceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Replace: ForwardRefExoticComponent<ReplaceProps & RefAttributes<SVGSVGElement>>;

export default Replace;
export { Replace };
