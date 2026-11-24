import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseCheck: ForwardRefExoticComponent<DatabaseCheckProps & RefAttributes<SVGSVGElement>>;

export default DatabaseCheck;
export { DatabaseCheck };
