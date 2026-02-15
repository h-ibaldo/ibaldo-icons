import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BulbIdea1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BulbIdea1: ForwardRefExoticComponent<BulbIdea1Props & RefAttributes<SVGSVGElement>>;

export default BulbIdea1;
export { BulbIdea1 };
