import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXWide: ForwardRefExoticComponent<ChatXWideProps & RefAttributes<SVGSVGElement>>;

export default ChatXWide;
export { ChatXWide };
