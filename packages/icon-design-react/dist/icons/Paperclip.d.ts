import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Paperclip: ForwardRefExoticComponent<PaperclipProps & RefAttributes<SVGSVGElement>>;

export default Paperclip;
export { Paperclip };
