import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseArrowDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseArrowDown: ForwardRefExoticComponent<DatabaseArrowDownProps & RefAttributes<SVGSVGElement>>;

export default DatabaseArrowDown;
export { DatabaseArrowDown };
