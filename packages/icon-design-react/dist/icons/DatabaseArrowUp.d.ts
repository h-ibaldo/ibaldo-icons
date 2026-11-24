import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseArrowUp: ForwardRefExoticComponent<DatabaseArrowUpProps & RefAttributes<SVGSVGElement>>;

export default DatabaseArrowUp;
export { DatabaseArrowUp };
