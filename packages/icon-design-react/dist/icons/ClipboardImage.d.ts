import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardImageProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardImage: ForwardRefExoticComponent<ClipboardImageProps & RefAttributes<SVGSVGElement>>;

export default ClipboardImage;
export { ClipboardImage };
