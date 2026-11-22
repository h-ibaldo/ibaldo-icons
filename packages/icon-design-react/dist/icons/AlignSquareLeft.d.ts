import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignSquareLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignSquareLeft: ForwardRefExoticComponent<AlignSquareLeftProps & RefAttributes<SVGSVGElement>>;

export default AlignSquareLeft;
export { AlignSquareLeft };
