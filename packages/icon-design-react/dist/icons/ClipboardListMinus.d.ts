import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListMinus: ForwardRefExoticComponent<ClipboardListMinusProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListMinus;
export { ClipboardListMinus };
