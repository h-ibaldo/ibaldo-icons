import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart2AddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart2Add: ForwardRefExoticComponent<Heart2AddProps & RefAttributes<SVGSVGElement>>;

export default Heart2Add;
export { Heart2Add };
