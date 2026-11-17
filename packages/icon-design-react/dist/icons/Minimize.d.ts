import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MinimizeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Minimize: ForwardRefExoticComponent<MinimizeProps & RefAttributes<SVGSVGElement>>;

export default Minimize;
export { Minimize };
