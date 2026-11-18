import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorSquareDashedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorSquareDashed: ForwardRefExoticComponent<CursorSquareDashedProps & RefAttributes<SVGSVGElement>>;

export default CursorSquareDashed;
export { CursorSquareDashed };
