import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Heart1AddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Heart1Add: ForwardRefExoticComponent<Heart1AddProps & RefAttributes<SVGSVGElement>>;

export default Heart1Add;
export { Heart1Add };
