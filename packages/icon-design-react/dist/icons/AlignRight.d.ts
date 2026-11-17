import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignRight: ForwardRefExoticComponent<AlignRightProps & RefAttributes<SVGSVGElement>>;

export default AlignRight;
export { AlignRight };
