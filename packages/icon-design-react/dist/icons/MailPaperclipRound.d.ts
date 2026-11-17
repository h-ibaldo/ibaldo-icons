import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MailPaperclipRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MailPaperclipRound: ForwardRefExoticComponent<MailPaperclipRoundProps & RefAttributes<SVGSVGElement>>;

export default MailPaperclipRound;
export { MailPaperclipRound };
