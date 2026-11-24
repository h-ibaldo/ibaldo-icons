import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDollarWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDollarWide: ForwardRefExoticComponent<ChatDollarWideProps & RefAttributes<SVGSVGElement>>;

export default ChatDollarWide;
export { ChatDollarWide };
