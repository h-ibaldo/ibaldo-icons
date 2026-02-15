import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BulbIdea3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BulbIdea3: ForwardRefExoticComponent<BulbIdea3Props & RefAttributes<SVGSVGElement>>;

export default BulbIdea3;
export { BulbIdea3 };
