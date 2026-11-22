import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxFrontXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxFrontX: ForwardRefExoticComponent<BoxFrontXProps & RefAttributes<SVGSVGElement>>;

export default BoxFrontX;
export { BoxFrontX };
