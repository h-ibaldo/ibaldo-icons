import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BulbIdea42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BulbIdea42: ForwardRefExoticComponent<BulbIdea42Props & RefAttributes<SVGSVGElement>>;

export default BulbIdea42;
export { BulbIdea42 };
