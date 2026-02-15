import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BulbIdeaProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BulbIdea: ForwardRefExoticComponent<BulbIdeaProps & RefAttributes<SVGSVGElement>>;

export default BulbIdea;
export { BulbIdea };
