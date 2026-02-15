import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BulbIdea2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BulbIdea2: ForwardRefExoticComponent<BulbIdea2Props & RefAttributes<SVGSVGElement>>;

export default BulbIdea2;
export { BulbIdea2 };
