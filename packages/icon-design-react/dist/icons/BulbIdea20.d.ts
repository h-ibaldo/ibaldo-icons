import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BulbIdea20Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BulbIdea20: ForwardRefExoticComponent<BulbIdea20Props & RefAttributes<SVGSVGElement>>;

export default BulbIdea20;
export { BulbIdea20 };
