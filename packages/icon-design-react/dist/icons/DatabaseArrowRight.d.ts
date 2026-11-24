import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DatabaseArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DatabaseArrowRight: ForwardRefExoticComponent<DatabaseArrowRightProps & RefAttributes<SVGSVGElement>>;

export default DatabaseArrowRight;
export { DatabaseArrowRight };
