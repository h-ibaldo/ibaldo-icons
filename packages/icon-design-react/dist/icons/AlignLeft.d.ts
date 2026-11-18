import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignLeft: ForwardRefExoticComponent<AlignLeftProps & RefAttributes<SVGSVGElement>>;

export default AlignLeft;
export { AlignLeft };
