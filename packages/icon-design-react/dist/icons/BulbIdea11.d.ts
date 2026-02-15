import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BulbIdea11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BulbIdea11: ForwardRefExoticComponent<BulbIdea11Props & RefAttributes<SVGSVGElement>>;

export default BulbIdea11;
export { BulbIdea11 };
