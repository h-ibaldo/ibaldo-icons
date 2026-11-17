import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RestoreProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Restore: ForwardRefExoticComponent<RestoreProps & RefAttributes<SVGSVGElement>>;

export default Restore;
export { Restore };
