import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorUp: ForwardRefExoticComponent<CursorUpProps & RefAttributes<SVGSVGElement>>;

export default CursorUp;
export { CursorUp };
