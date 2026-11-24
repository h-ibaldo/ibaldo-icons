import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckVertical: ForwardRefExoticComponent<PaperclipCheckVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckVertical;
export { PaperclipCheckVertical };
