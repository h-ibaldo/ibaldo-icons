import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll3HorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll3Horizontal: ForwardRefExoticComponent<Poll3HorizontalProps & RefAttributes<SVGSVGElement>>;

export default Poll3Horizontal;
export { Poll3Horizontal };
