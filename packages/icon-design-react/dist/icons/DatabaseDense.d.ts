import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseDenseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseDense: ForwardRefExoticComponent<DatabaseDenseProps & RefAttributes<SVGSVGElement>>;

export default DatabaseDense;
export { DatabaseDense };
