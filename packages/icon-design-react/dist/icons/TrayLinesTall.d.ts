import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayLinesTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayLinesTall: ForwardRefExoticComponent<TrayLinesTallProps & RefAttributes<SVGSVGElement>>;

export default TrayLinesTall;
export { TrayLinesTall };
