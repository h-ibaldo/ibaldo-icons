import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignSquareRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignSquareRight: ForwardRefExoticComponent<AlignSquareRightProps & RefAttributes<SVGSVGElement>>;

export default AlignSquareRight;
export { AlignSquareRight };
