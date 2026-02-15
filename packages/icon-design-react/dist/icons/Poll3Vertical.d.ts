import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll3VerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll3Vertical: ForwardRefExoticComponent<Poll3VerticalProps & RefAttributes<SVGSVGElement>>;

export default Poll3Vertical;
export { Poll3Vertical };
