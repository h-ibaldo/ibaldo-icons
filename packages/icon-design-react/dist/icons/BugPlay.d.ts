import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BugPlayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BugPlay: ForwardRefExoticComponent<BugPlayProps & RefAttributes<SVGSVGElement>>;

export default BugPlay;
export { BugPlay };
