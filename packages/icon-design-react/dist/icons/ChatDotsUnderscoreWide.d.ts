import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsUnderscoreWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsUnderscoreWide: ForwardRefExoticComponent<ChatDotsUnderscoreWideProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsUnderscoreWide;
export { ChatDotsUnderscoreWide };
