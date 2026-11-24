import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardImageLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardImageLarge: ForwardRefExoticComponent<ClipboardImageLargeProps & RefAttributes<SVGSVGElement>>;

export default ClipboardImageLarge;
export { ClipboardImageLarge };
