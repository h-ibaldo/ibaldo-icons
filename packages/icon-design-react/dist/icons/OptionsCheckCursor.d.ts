import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OptionsCheckCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OptionsCheckCursor: ForwardRefExoticComponent<OptionsCheckCursorProps & RefAttributes<SVGSVGElement>>;

export default OptionsCheckCursor;
export { OptionsCheckCursor };
