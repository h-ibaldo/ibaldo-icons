import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseMinus: ForwardRefExoticComponent<DatabaseMinusProps & RefAttributes<SVGSVGElement>>;

export default DatabaseMinus;
export { DatabaseMinus };
