import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Database: ForwardRefExoticComponent<DatabaseProps & RefAttributes<SVGSVGElement>>;

export default Database;
export { Database };
