import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabasePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabasePlus: ForwardRefExoticComponent<DatabasePlusProps & RefAttributes<SVGSVGElement>>;

export default DatabasePlus;
export { DatabasePlus };
