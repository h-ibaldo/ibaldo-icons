import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatWarningWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatWarningWide: ForwardRefExoticComponent<ChatWarningWideProps & RefAttributes<SVGSVGElement>>;

export default ChatWarningWide;
export { ChatWarningWide };
