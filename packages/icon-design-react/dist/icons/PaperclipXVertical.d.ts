import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXVertical: ForwardRefExoticComponent<PaperclipXVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXVertical;
export { PaperclipXVertical };
