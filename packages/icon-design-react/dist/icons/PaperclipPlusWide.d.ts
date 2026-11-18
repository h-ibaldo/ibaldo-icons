import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlusWide: ForwardRefExoticComponent<PaperclipPlusWideProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlusWide;
export { PaperclipPlusWide };
